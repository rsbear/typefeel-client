import React, { useState } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";
import { useKeyboardQuery, useUpdateKeyboardMutation } from "generated/graphql";
import { Formik, FieldArray } from "formik";
import { text } from "styles/text";
import { FormikInput, FormikArea } from "styles/inputs";
import css from "@emotion/css";
import { colors } from "styles/main";
import { Button } from "styles/buttons";

interface Props {
  authUser?: any;
  shortId: string;
}

const UpdateKeyboard: GetProps<Props> = ({ authUser, shortId }) => {
  const [updateField, setUpdateField] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const { loading, error, data, refetch } = useKeyboardQuery({
    variables: { shortId }
  });
  const [updateKeyboard] = useUpdateKeyboardMutation();

  const kb = !loading && data && data.keyboard;

  const initValues = {
    angle: kb.angle,
    connector: kb.connector,
    editions: kb.editions,
    details: kb.details,
    firmware: kb.firmware,
    layouts: kb.layouts,
    mount: kb.mount,
    pcb: kb.pcb,
    size: kb.size,
    support: kb.support
  };

  const handleSubmit = async (values: any) => {
    event.preventDefault();
    const editions = values.editions.map((x: any) => {
      const { __typename, ...rest } = x;
      return rest;
    });
    const data = { ...values, editions };
    try {
      let res = await updateKeyboard({
        variables: {
          id: kb.id,
          data
        }
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout title="Update keyboard" authUser={authUser}>
      {loading && <h2>Loading..</h2>}
      {!loading && data && data.keyboard && (
        <>
          <h1 css={text.heading}>Update {data.keyboard.name}</h1>
          <ul css={editableFields}>
            <li>
              {kb.angle} typing angle
              <span onClick={() => setUpdateField("angle")}>Edit</span>
            </li>
            <li>
              {kb.mount} mount
              <span onClick={() => setUpdateField("mount")}>Edit</span>
            </li>
            <li>
              {kb.connector} connector
              <span onClick={() => setUpdateField("connector")}>Edit</span>
            </li>
            <li>
              {kb.pcb} pcb
              <span onClick={() => setUpdateField("pcb")}>Edit</span>
            </li>
            <li>
              {kb.firmware} firmware
              <span onClick={() => setUpdateField("firmware")}>Edit</span>
            </li>
            <li onClick={() => setShowDetails(!showDetails)}>
              Show details
              <span onClick={() => setUpdateField("details")}>EDIT</span>
              {showDetails &&
                kb.details.map((d: string, i: number) => <p key={i}>{d}</p>)}
            </li>
          </ul>
          <Formik initialValues={initValues} onSubmit={() => {}}>
            {({ values }) => (
              <form onSubmit={() => handleSubmit(values)}>
                {(updateField === "angle" || values.angle !== kb.angle) && (
                  <>
                    <h5>Typing angle</h5>
                    <FormikInput
                      type="text"
                      margins="5px 0 15px 0"
                      icon="icon ion-ios-at"
                      name="angle"
                      placeholder="Typing angle"
                    />
                  </>
                )}
                {(updateField === "mount" || values.mount !== kb.mount) && (
                  <>
                    <h5>Mount</h5>
                    <FormikInput
                      type="text"
                      margins="5px 0 15px 0"
                      icon="icon ion-ios-at"
                      name="mount"
                      placeholder="Mount"
                    />
                  </>
                )}
                {(updateField === "connector" ||
                  values.connector !== kb.connector) && (
                  <>
                    <h5>Connection type</h5>
                    <FormikInput
                      type="text"
                      margins="5px 0 15px 0"
                      icon="icon ion-ios-at"
                      name="connector"
                      placeholder="Connection type"
                    />
                  </>
                )}
                {(updateField === "pcb" || values.pcb !== kb.pcb) && (
                  <>
                    <h5>PCB</h5>
                    <FormikInput
                      type="text"
                      margins="5px 0 15px 0"
                      icon="icon ion-ios-at"
                      name="pcb"
                      placeholder="PCB"
                    />
                  </>
                )}
                {(updateField === "firmware" ||
                  values.firmware !== kb.firmware) && (
                  <>
                    <h5>Firmware</h5>
                    <FormikInput
                      type="text"
                      margins="5px 0 15px 0"
                      icon="icon ion-ios-at"
                      name="firmware"
                      placeholder="Firmware"
                    />
                  </>
                )}
                {(updateField === "details" ||
                  values.details !== kb.details) && (
                  <>
                    <h5>Details</h5>
                    <FieldArray
                      name="details"
                      render={({ push }) => (
                        <>
                          {values.details.map((x: any, i: number) => (
                            <FormikArea
                              icon="icon ion-ios-information-circle"
                              margins="0 0 10px 0"
                              type="text"
                              placeholder={`The story part ${i + 1}`}
                              name={`details.${i}`}
                            />
                          ))}
                          <Button small="true" onClick={() => push("")}>
                            Add another
                          </Button>
                        </>
                      )}
                    />
                  </>
                )}
                <Button type="submit" primary="true">
                  Post update
                </Button>
              </form>
            )}
          </Formik>
        </>
      )}
    </Layout>
  );
};

UpdateKeyboard.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default UpdateKeyboard;

const editableFields = css`
  margin-bottom: 40px;
  li {
    margin: 10px 0;
    font-size: 1.75rem;
    font-weight: 600;
    color: ${colors.black60};

    span {
      margin-left: 20px;
      padding-left: 20px;
      color: ${colors.black30};
      text-transform: uppercase;
      border-left: solid 1px ${colors.black05};
      cursor: pointer;
    }

    p {
      margin: 10px 0;
      font-size: 14px;
    }
  }
`;
