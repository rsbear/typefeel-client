import React, { useState } from "react";
import Layout from "components/layouts/Layout";
import { GetProps } from "interfaces/GetProps";
import { useKeyboardQuery, useUpdateKeyboardMutation } from "generated/graphql";
import { Formik, FieldArray } from "formik";
import { text } from "styles/text";
import { FormikInput, FormikArea } from "styles/inputs";
import css from "@emotion/css";
import { colors, flex } from "styles/main";
import { Button } from "styles/buttons";

interface Props {
  authUser?: any;
  shortId: string;
}

const UpdateKeyboard: GetProps<Props> = ({ authUser, shortId }) => {
  const [updateField, setUpdateField] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [editionIndex, setEditionIndex] = useState(0);
  const { loading, error, data, refetch } = useKeyboardQuery({
    variables: { shortId }
  });
  const [updateKeyboard] = useUpdateKeyboardMutation();

  const kb = !loading && !error && data && data.keyboard;
  const keyboard = kb;

  const initValues = {
    angle: keyboard.angle,
    connector: keyboard.connector,
    editions: keyboard.editions,
    details: keyboard.details,
    firmware: keyboard.firmware,
    layouts: keyboard.layouts,
    mount: keyboard.mount,
    pcb: keyboard.pcb,
    size: keyboard.size,
    support: keyboard.support
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
          id: keyboard.id,
          data
        }
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCasesEdit = (idx: number) => {
    setUpdateField("cases");
    setEditionIndex(idx);
  };

  return (
    <Layout title="Update keyboard" authUser={authUser}>
      {loading && <h2>Loading..</h2>}
      {!loading && data && data.keyboard && (
        <>
          <h1 css={text.heading}>Update {keyboard.name}</h1>
          <div css={flex.row}>
            <ul css={editableFields}>
              <li>
                {keyboard.angle} typing angle
                <span onClick={() => setUpdateField("angle")}>Edit</span>
              </li>
              <li>
                {keyboard.mount} mount
                <span onClick={() => setUpdateField("mount")}>Edit</span>
              </li>
              <li>
                {keyboard.connector} connector
                <span onClick={() => setUpdateField("connector")}>Edit</span>
              </li>
              <li>
                {keyboard.pcb} pcb
                <span onClick={() => setUpdateField("pcb")}>Edit</span>
              </li>
              <li>
                {keyboard.firmware} firmware
                <span onClick={() => setUpdateField("firmware")}>Edit</span>
              </li>
              <li onClick={() => setShowDetails(!showDetails)}>
                Show details
                <span onClick={() => setUpdateField("details")}>EDIT</span>
                {showDetails &&
                  keyboard.details.map((d: string, i: number) => (
                    <p key={i}>{d}</p>
                  ))}
              </li>
            </ul>

            <ul css={editableFields}>
              <h1>Editions</h1>
              {keyboard.editions.map((e, i) => (
                <>
                  <h2>{e.name}</h2>
                  <li>
                    Cases <span onClick={() => handleCasesEdit(i)}>EDIT</span>
                  </li>
                  <li>Plates</li>
                  <li>Layouts</li>
                </>
              ))}
            </ul>
          </div>
          <Formik initialValues={initValues} onSubmit={() => {}}>
            {({ values }) => (
              <form onSubmit={() => handleSubmit(values)}>
                {(updateField === "angle" ||
                  values.angle !== keyboard.angle) && (
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
                {(updateField === "mount" ||
                  values.mount !== keyboard.mount) && (
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
                  values.connector !== keyboard.connector) && (
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
                {(updateField === "pcb" || values.pcb !== keyboard.pcb) && (
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
                  values.firmware !== keyboard.firmware) && (
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
                  values.details !== keyboard.details) && (
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
                {(updateField === "cases" ||
                  values.editions[editionIndex].cases !==
                    values.editions[editionIndex].cases) && (
                  <>
                    <h5>Cases</h5>
                    <FieldArray
                      name="cases"
                      render={({ push }) => (
                        <>
                          {values.editions[editionIndex].cases.map(
                            (x: any, i: number) => (
                              <FormikInput
                                icon="icon ion-ios-information-circle"
                                margins="0 0 10px 0"
                                type="text"
                                placeholder={x}
                                name={`cases.${i}`}
                              />
                            )
                          )}
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
  width: 50%;

  li {
    margin: 10px 0;
    font-size: 1.25rem;
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
