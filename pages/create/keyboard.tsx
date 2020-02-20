import React, { FC, useState, SetStateAction } from "react";
import Layout from "components/layouts/Layout";

import css from "@emotion/css";
import { FormikInput, FormikArea } from "styles/inputs";
import { flex, borderBox, grid50, grid33, margins } from "styles/main";
import { Button, DeleteButton } from "styles/buttons";
import { text } from "styles/text";

import Upload from "components/shared/Upload";
import UploadPreview from "components/shared/UploadPreview";
import { useMakeKeyboardMutation, KeyboardInput } from "generated/graphql";
import { GetProps } from "interfaces/GetProps";
import { AuthUser } from "interfaces/AuthUser";

import { Formik, FieldArray } from "formik";
import { useRouter } from "next/router";
import { useAppContext } from "hooks/useAppContext";

interface Props {}

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
  suggestedPrice: null,
  name: "",
  cases: [""],
  colors: [],
  plates: [""]
};

const CreateKeyboard: GetProps<Props> = () => {
  const { authUser } = useAppContext();
  const [images, setImages] = useState([]);
  const [errors, setErrors]: SetStateAction<any> = useState(null);
  const [multiEditions, setMultiEditions]: SetStateAction<any> = useState(null);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const [makeKeyboard, { client }] = useMakeKeyboardMutation();

  const handlePushEdition = (values: any, multi: boolean) => {
    setMultiEditions(multi);
    values.editions.push(editionObj);
  };

  const validator = values => {
    const errObj = {};

    // basic entries from values
    Object.entries(values).forEach(([key, value]) => {
      if (value === "" || value === 0) {
        errObj[key] = `${key} must have something`;
      }
    });

    for (let v of values.details) {
      if (v.length <= 0) {
        errObj["details"] =
          "Surely you have something to say about this project";
      }
    }

    for (let l of values.layouts) {
      if (l.length <= 0) {
        errObj["layouts"] = "Please add a layout i.e HHKB";
      }
    }

    for (let s of values.support) {
      if (s.length <= 0) {
        errObj["support"] = "Please add supported layouts i.e ISO";
      }
    }

    let editionErrs = [];
    let editionObj = {};
    values.editions.map((ed, idx) => {
      if (multiEditions) {
        if (ed.name.length <= 0) {
          editionObj["name"] = "You must set a name for your editions";
        }
      }
      if (ed.price <= 0) {
        editionObj["price"] = `a price must be set`;
      }
      for (let c of ed.cases) {
        if (c.length <= 0) {
          editionObj["cases"] = "Please add a case material";
        }
      }
      for (let p of ed.plates) {
        if (p.length <= 0) {
          editionObj["plates"] = "Please add a plate material";
        }
      }

      if (Object.entries(editionObj).length > 0) {
        editionErrs.push(editionObj);
      }
    });

    if (editionErrs.length > 0) {
      errObj["editions"] = editionErrs;
    }

    if (images.length < 5) {
      errObj["images"] = "You must provide at least 5 pictures";
    }

    if (Object.entries(errObj).length > 0) {
      setErrors(errObj);
    } else {
      setErrors(null);
    }
  };

  const handleMakeKeyboard = async (data: KeyboardInput, errors: any) => {
    event.preventDefault();
    validator(data);
    setProcessing(true);
    if (!errors) {
      try {
        const response = await makeKeyboard({ variables: { data, images } });
        if (response && response.data) {
          await client!.resetStore().then(() => {
            router.push(`/keyboard/${response.data.makeKeyboard.message}`);
          });
        }
      } catch (err) {
        setProcessing(false);
        console.log(err);
      }
    }
  };

  return (
    <Layout title="Create Keyboard">
      <h1 css={[text.heading, margins("20px 0")]}>Create a keyboard</h1>
      <Formik initialValues={initValues} onSubmit={() => {}}>
        {({ values, errors }) => (
          <form onSubmit={() => handleMakeKeyboard(values, errors)}>
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
              {multiEditions === null && (
                <>
                  <h3>Multiple editions?</h3>
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
                </>
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
                              type="number"
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
                                          onClick={() =>
                                            helpers2.remove(cIndex)
                                          }
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
                                          onClick={() =>
                                            helpers2.remove(pIndex)
                                          }
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
                                          onClick={() =>
                                            helpers2.remove(cIndex)
                                          }
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
                        <FieldArray
                          name="layouts"
                          render={helpers2 => (
                            <>
                              <div css={[borderBox, margins("0 0 20px 0")]}>
                                <h5>Layouts</h5>
                                {values.layouts.map(
                                  (l: any, lIndex: number) => (
                                    <div
                                      key={lIndex}
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
                                        id={`layouts.${lIndex}`}
                                        name={`layouts.${lIndex}`}
                                      />
                                      <DeleteButton
                                        icon="icon ion-ios-trash"
                                        onClick={() => helpers2.remove(lIndex)}
                                      />
                                    </div>
                                  )
                                )}
                                <Button
                                  small="true"
                                  type="button"
                                  onClick={() => helpers2.push("")}
                                >
                                  Add another layout
                                </Button>
                              </div>
                            </>
                          )}
                        />
                        <FieldArray
                          name="support"
                          render={helpers2 => (
                            <>
                              <div css={[borderBox, margins("0 0 20px 0")]}>
                                <h5>Layout support</h5>
                                {values.support.map(
                                  (s: any, sIndex: number) => (
                                    <div
                                      key={sIndex}
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
                                        id={`support.${sIndex}`}
                                        name={`support.${sIndex}`}
                                      />
                                      <DeleteButton
                                        icon="icon ion-ios-trash"
                                        onClick={() => helpers2.remove(sIndex)}
                                      />
                                    </div>
                                  )
                                )}
                                <Button
                                  small="true"
                                  type="button"
                                  onClick={() => helpers2.push("")}
                                >
                                  Add another layout support
                                </Button>
                              </div>
                            </>
                          )}
                        />
                        <FieldArray
                          name="details"
                          render={helpers2 => (
                            <>
                              <div css={[borderBox, margins("0 0 20px 0")]}>
                                <h5>Details</h5>
                                {values.details.map(
                                  (d: any, dIndex: number) => (
                                    <div
                                      key={dIndex}
                                      css={[
                                        flex.row,
                                        flex.itemscenter,
                                        multiInputMargin
                                      ]}
                                    >
                                      <FormikArea
                                        margins="0 0 10px 0"
                                        name={`details.${dIndex}`}
                                        id={`details.${dIndex}`}
                                      ></FormikArea>
                                      <DeleteButton
                                        icon="icon ion-ios-trash"
                                        onClick={() => helpers2.remove(dIndex)}
                                      />
                                    </div>
                                  )
                                )}
                                <Button
                                  small="true"
                                  type="button"
                                  onClick={() => helpers2.push("")}
                                >
                                  Add another
                                </Button>
                              </div>
                            </>
                          )}
                        />
                        {/* image management */}
                        <h2 css={margins("60px 0 10px 0")}>Image gallery</h2>
                        <Upload images={images} setImages={setImages} />
                        <UploadPreview images={images} setImages={setImages} />

                        {!processing ? (
                          <Button primary="true" type="submit" margin="40px 0">
                            Submit keyboard post
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            secondary="true"
                            margin="40px 0"
                          >
                            Submitting
                          </Button>
                        )}
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
