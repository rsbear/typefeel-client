import React, { FC, useState, SetStateAction } from "react";
import Layout from "components/layouts/Layout";

import css from "@emotion/css";
import { TextArea, FormikInput } from "styles/inputs";
import { flex, borderBox, grid50, grid33, margins } from "styles/main";
import { Button, DeleteButton } from "styles/buttons";
import { text } from "styles/text";

import Upload from "components/shared/Upload";
import UploadPreview from "components/shared/UploadPreview";
import { useMakeKeyboardMutation, KeyboardInput } from "generated/graphql";
import { GetProps } from "interfaces/GetProps";
import { AuthUser } from "interfaces/AuthUser";

import { Formik, FieldArray } from "formik";

interface Props {
  authUser: AuthUser;
}

const CreateKeyboard: GetProps<Props> = ({ authUser }) => {
  const [images, setImages] = React.useState([]);
  //switcher state is used when creating a new input field with an 'add button'
  //this is super suboptimal but we'll leave it temporarily
  const [switcher, setSwitcher] = useState(false);
  const [multiEditions, setMultiEditions]: SetStateAction<any> = useState(null);
  const initValues = {
    angle: "",
    brand: "",
    connector: "",
    firmware: "",
    mount: "",
    pcb: "",
    name: "",
    size: "",
    editions: [],
    details: [""],
    layouts: [""],
    support: [""],
    market: false,
    interestCheck: true,
    groupBuy: false,
    groupBuySoon: false,
    closed: false
  };

  const editionObj = {
    price: 0,
    name: "",
    cases: [""],
    colors: [],
    plates: [""]
  };

  const [makeKeyboard] = useMakeKeyboardMutation();

  const handlePushEdition = (values: any, multi: boolean) => {
    setMultiEditions(multi);
    values.editions.push(editionObj);
  };

  const handlePushString = (value: any) => {
    value.push("");
    setSwitcher(!switcher);
  };

  const handleMakeKeyboard = async (data: KeyboardInput) => {
    event.preventDefault();
    console.log(data);
    // try {
    //   const response = await makeKeyboard({ variables: { data, images } });
    //   console.log(response);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Layout title="Create Keyboard" authUser={authUser}>
      <h1 css={[text.heading, margins("20px 0")]}>Create a keyboard</h1>
      <Formik initialValues={initValues} onSubmit={() => {}}>
        {({ values }) => (
          <form onSubmit={() => handleMakeKeyboard(values)}>
            <h2 css={margins("10px 0")}>Specs</h2>
            <div css={[borderBox, margins("0 0 20px 0")]}>
              <h5>Brand and keyboard name</h5>
              <div css={grid50}>
                <FormikInput
                  type="text"
                  autoFocus
                  icon="icon ion-ios-at"
                  placeholder="Brand"
                  name="brand"
                />
                <FormikInput
                  type="text"
                  icon="icon ion-ios-at"
                  placeholder="Name"
                  name="name"
                />
              </div>
            </div>
            <div css={[borderBox, margins("0 0 20px 0")]}>
              <h5>Size, Mount, and Typing angle</h5>
              <div css={grid33}>
                <FormikInput
                  type="text"
                  icon="icon ion-ios-albums"
                  placeholder="Size"
                  name="size"
                />
                <FormikInput
                  type="text"
                  icon="icon ion-ios-apps"
                  placeholder="Mount"
                  name="mount"
                />
                <FormikInput
                  type="text"
                  icon="icon ion-ios-resize"
                  placeholder="angle"
                  name="angle"
                />
              </div>
            </div>
            <div css={[borderBox, margins("0 0 20px 0")]}>
              <h5>Connection, PCB, and Firmware</h5>
              <div css={grid33}>
                <FormikInput
                  type="text"
                  icon="icon ion-ios-flash"
                  placeholder="eg. USB Type-C"
                  name="connector"
                />
                <FormikInput
                  type="text"
                  icon="icon ion-ios-git-branch"
                  placeholder="PCB"
                  name="pcb"
                />
                <FormikInput
                  type="text"
                  icon="icon ion-ios-git-pull-request"
                  placeholder="Firmware eg. QMK"
                  name="firmware"
                />
              </div>
            </div>

            {/* editions */}
            <div
              css={[flex.column, flex.itemscenter, editionQuestionContainer]}
            >
              <h3>Multiple editions?</h3>
              {/* <div css={[flex.row, hundo, flex.justifycenter]}>
                {multiEditions === null || multiEditions === true ? (
                  <Button
                    css={wide}
                    secondary="true"
                    type="button"
                    onClick={() => setMultiEditions(true)}
                  >
                    No
                  </Button>
                ) : (
                  <Button
                    css={wide}
                    primary="true"
                    onClick={() => setMultiEditions(false)}
                  >
                    No
                  </Button>
                )}
                {!multiEditions ? (
                  <Button
                    css={wide}
                    secondary="true"
                    type="button"
                    onClick={e => setMultiEditions(true)}
                  >
                    Yes
                  </Button>
                ) : (
                  <Button
                    css={wide}
                    primary="true"
                    type="button"
                    onClick={e => setMultiEditions(true)}
                  >
                    Yes
                  </Button>
                )}
              </div> */}
              {multiEditions === null && (
                <div css={[flex.row, hundo, flex.justifycenter]}>
                  <Button
                    css={wide}
                    secondary="true"
                    type="button"
                    onClick={() => handlePushEdition(values, false)}
                  >
                    No
                  </Button>
                  <Button
                    css={wide}
                    secondary="true"
                    type="button"
                    onClick={() => handlePushEdition(values, true)}
                  >
                    Yes
                  </Button>
                </div>
              )}
            </div>

            <FieldArray
              name="editions"
              render={helpers => (
                <>
                  {(values.editions.length !== 0 ||
                    multiEditions === false) && (
                    <>
                      <h2 css={margins("10px 0")}>
                        Price, materials, and colors
                      </h2>
                      {values.editions.map((edition: any, eIdx: number) => (
                        <div key={eIdx}>
                          {multiEditions === true && (
                            <div css={[borderBox, margins("0 0 20px 0")]}>
                              <h5>Edition name</h5>
                              <FormikInput
                                type="text"
                                icon="icon ion-ios-at"
                                placeholder="Name of this edition"
                                id={`editions[${eIdx}].name`}
                                name={`editions[${eIdx}].name`}
                              />
                            </div>
                          )}
                          <div css={[borderBox, margins("0 0 20px 0")]}>
                            <h5>Price</h5>
                            <FormikInput
                              type="text"
                              icon="icon ion-logo-usd"
                              placeholder="Price"
                              id={`editions[${eIdx}].price`}
                              name={`editions[${eIdx}].price`}
                            />
                          </div>
                          <FieldArray
                            name={`editions[${eIdx}].cases`}
                            render={helpers2 => (
                              <>
                                <div css={[borderBox, margins("0 0 20px 0")]}>
                                  <h5>Case materials</h5>
                                  {edition.cases.map(
                                    (c: any, cIndex: number) => (
                                      <div
                                        key={cIndex}
                                        css={[
                                          flex.row,
                                          flex.itemscenter,
                                          multiInputMargin
                                        ]}
                                      >
                                        <FormikInput
                                          type="text"
                                          icon="icon ion-ios-construct"
                                          placeholder="e.g. Aluminum"
                                          id={`editions[${eIdx}].cases.${cIndex}`}
                                          name={`editions[${eIdx}].cases.${cIndex}`}
                                        />
                                        <DeleteButton
                                          icon="icon ion-ios-trash"
                                          onClick={() => {}}
                                        />
                                      </div>
                                    )
                                  )}
                                  <Button
                                    small="true"
                                    type="button"
                                    onClick={() => helpers2.push("")}
                                  >
                                    Add another case
                                  </Button>
                                </div>
                              </>
                            )}
                          />
                          <FieldArray
                            name={`editions[${eIdx}].plates`}
                            render={helpers2 => (
                              <>
                                <div css={[borderBox, margins("0 0 20px 0")]}>
                                  <h5>Plate materials</h5>
                                  {edition.plates.map(
                                    (p: any, pIndex: number) => (
                                      <div
                                        key={pIndex}
                                        css={[
                                          flex.row,
                                          flex.itemscenter,
                                          multiInputMargin
                                        ]}
                                      >
                                        <FormikInput
                                          type="text"
                                          icon="icon ion-ios-hammer"
                                          placeholder="e.g. Aluminum"
                                          id={`editions[${eIdx}].plates.${pIndex}`}
                                          name={`editions[${eIdx}].plates.${pIndex}`}
                                        />
                                        <DeleteButton
                                          icon="icon ion-ios-trash"
                                          onClick={() => {}}
                                        />
                                      </div>
                                    )
                                  )}
                                  <Button
                                    small="true"
                                    type="button"
                                    onClick={() => helpers2.push("")}
                                  >
                                    Add another plate
                                  </Button>
                                </div>
                              </>
                            )}
                          />
                          <FieldArray
                            name={`editions[${eIdx}].colors`}
                            render={helpers2 => (
                              <>
                                <div css={[borderBox, margins("0 0 20px 0")]}>
                                  <h5>
                                    {edition.colors.length === 0
                                      ? "Do you want to provide colors?"
                                      : "Colors"}
                                  </h5>
                                  {edition.colors.map(
                                    (c: any, cIndex: number) => (
                                      <div
                                        key={cIndex}
                                        css={[
                                          flex.row,
                                          flex.itemscenter,
                                          multiInputMargin
                                        ]}
                                      >
                                        <FormikInput
                                          type="text"
                                          icon="icon ion-ios-color-fill"
                                          placeholder="colors"
                                          id={`editions[${eIdx}].colors.${cIndex}`}
                                          name={`editions[${eIdx}].colors.${cIndex}`}
                                        />
                                        <DeleteButton
                                          icon="icon ion-ios-trash"
                                          onClick={() => {}}
                                        />
                                      </div>
                                    )
                                  )}
                                  <Button
                                    small="true"
                                    type="button"
                                    onClick={() => helpers2.push("")}
                                  >
                                    Add a color
                                  </Button>
                                </div>
                              </>
                            )}
                          />
                        </div>
                      ))}
                      {multiEditions && (
                        <Button
                          primary="true"
                          type="button"
                          onClick={() => helpers.push(editionObj)}
                        >
                          Add another edition
                        </Button>
                      )}
                      <>
                        <h2 css={margins("60px 0 10px 0")}>
                          Layouts, and information
                        </h2>
                        <div css={[borderBox, margins("0 0 20px 0")]}>
                          <h5>Layouts</h5>
                          {values.layouts.map(
                            (layout: string, layoutIndex: number) => (
                              <div
                                key={layoutIndex}
                                css={[
                                  flex.row,
                                  flex.itemscenter,
                                  multiInputMargin
                                ]}
                              >
                                <FormikInput
                                  type="text"
                                  icon="icon ion-ios-return-left"
                                  placeholder="e.g. WK (without blockers)"
                                  name="layout"
                                />
                                <DeleteButton icon="icon ion-ios-trash" />
                              </div>
                            )
                          )}

                          <Button
                            small="true"
                            onClick={() => handlePushString(values.layouts)}
                          >
                            Add another
                          </Button>
                        </div>
                        <div css={[borderBox, margins("0 0 20px 0")]}>
                          <h5>Layout support</h5>
                          {values.support.map(
                            (support: string, supportIndex: number) => (
                              <div
                                key={supportIndex}
                                css={[
                                  flex.row,
                                  flex.itemscenter,
                                  multiInputMargin
                                ]}
                              >
                                <FormikInput
                                  type="text"
                                  icon="icon ion-ios-globe"
                                  placeholder="e.g. ISO"
                                  name="support"
                                />
                                <DeleteButton icon="icon ion-ios-trash" />
                              </div>
                            )
                          )}
                          <Button
                            small="true"
                            onClick={() => handlePushString(values.support)}
                          >
                            Add another
                          </Button>
                        </div>
                        <div css={[borderBox, margins("0 0 20px 0")]}>
                          <h5>Details</h5>
                          {values.details.map(
                            (d: string, detailIndex: number) => (
                              <TextArea
                                margins="0 0 10px 0"
                                name="details"
                                onChange={() => {}}
                              ></TextArea>
                            )
                          )}
                          <Button
                            small="true"
                            onClick={() => values.details.push("")}
                          >
                            Add another
                          </Button>
                        </div>

                        {/* image management */}
                        <h2 css={margins("60px 0 10px 0")}>Image gallery</h2>
                        <Upload images={images} setImages={setImages} />
                        <UploadPreview images={images} setImages={setImages} />

                        <Button primary="true" type="submit">
                          Submit keyboard post
                        </Button>
                      </>
                    </>
                  )}
                </>
              )}
            />
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default CreateKeyboard;

const editionQuestionContainer = css`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 60px;
`;
const hundo = css`
  width: 100%;
  margin-top: 20px;
`;
const wide = css`
  width: 20%;
  margin-left: 15px;
`;
const multiInputMargin = css`
  margin-bottom: 10px;
`;
