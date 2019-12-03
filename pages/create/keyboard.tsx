import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import useKeyboard, { Keyboard } from "hooks/useKeyboard";

import css from "@emotion/css";
import { Input, TextArea } from "styles/inputs";
import { flex, borderBox, grid50, grid33, margins } from "styles/main";
import { Button, DeleteButton } from "styles/buttons";
import { text } from "styles/text";

import Upload from "components/shared/Upload";
import UploadPreview from "components/shared/UploadPreview";
import { useMakeKeyboardMutation } from "generated/graphql";
import { GetProps } from "interfaces/GetProps";

const CreateKeyboard: GetProps<any> = ({ authUser }) => {
  const [images, setImages] = React.useState([]);
  const [state, handlers, multipleEditions]: any = useKeyboard();

  const [makeKeyboard] = useMakeKeyboardMutation();

  const handleMakeKeyboard = async (e: any) => {
    e.preventDefault();
    try {
      let data = state;
      const response = await makeKeyboard({ variables: { data, images } });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout title="Create Keyboard" authUser={authUser}>
      <h1 css={[text.heading, margins("20px 0")]}>Create a keyboard</h1>
      <form onSubmit={e => handleMakeKeyboard(e)}>
        <h2 css={margins("10px 0")}>Specs</h2>
        <div css={[borderBox, margins("0 0 20px 0")]}>
          <h5>Brand and keyboard name</h5>
          <div css={grid50}>
            <Input
              type="text"
              autoFocus
              icon="icon ion-ios-at"
              placeholder="Brand"
              name="brand"
              value={state.brand}
              onChange={handlers.handleChange}
            />
            <Input
              type="text"
              icon="icon ion-ios-at"
              placeholder="Name"
              name="name"
              value={state.name}
              onChange={handlers.handleChange}
            />
          </div>
        </div>
        <div css={[borderBox, margins("0 0 20px 0")]}>
          <h5>Size, Mount, and Typing angle</h5>
          <div css={grid33}>
            <Input
              type="text"
              icon="icon ion-ios-albums"
              placeholder="Size"
              name="size"
              value={state.size}
              onChange={handlers.handleChange}
            />
            <Input
              type="text"
              icon="icon ion-ios-apps"
              placeholder="Mount"
              name="mount"
              value={state.mount}
              onChange={handlers.handleChange}
            />
            <Input
              type="text"
              icon="icon ion-ios-resize"
              placeholder="angle"
              name="angle"
              value={state.angle}
              onChange={handlers.handleChange}
            />
          </div>
        </div>
        <div css={[borderBox, margins("0 0 20px 0")]}>
          <h5>Connection, PCB, and Firmware</h5>
          <div css={grid33}>
            <Input
              type="text"
              icon="icon ion-ios-flash"
              placeholder="eg. USB Type-C"
              name="connector"
              value={state.connector}
              onChange={handlers.handleChange}
            />
            <Input
              type="text"
              icon="icon ion-ios-git-branch"
              placeholder="PCB"
              name="pcb"
              value={state.pcb}
              onChange={handlers.handleChange}
            />
            <Input
              type="text"
              icon="icon ion-ios-git-pull-request"
              placeholder="Firmware eg. QMK"
              name="firmware"
              value={state.firmware}
              onChange={handlers.handleChange}
            />
          </div>
        </div>

        {/* editions */}
        <div css={[flex.column, flex.itemscenter, editionQuestionContainer]}>
          <h3>Multiple editions?</h3>
          <div css={[flex.row, hundo, flex.justifycenter]}>
            {multipleEditions === null || multipleEditions === true ? (
              <Button
                css={wide}
                secondary="true"
                onClick={(e: any) => {
                  let multiple = false;
                  handlers.handleAddEdition(e, multiple);
                  handlers.setMultipleEditions(multiple);
                }}
              >
                No
              </Button>
            ) : (
              <Button
                css={wide}
                primary="true"
                onClick={e => {
                  let multiple = false;
                  handlers.handleAddEdition(e, multiple);
                  handlers.setMultipleEditions(multiple);
                }}
              >
                No
              </Button>
            )}
            {!multipleEditions ? (
              <Button
                css={wide}
                secondary="true"
                onClick={e => {
                  let multiple = true;
                  handlers.handleAddEdition(e, multiple);
                  handlers.setMultipleEditions(multiple);
                }}
              >
                Yes
              </Button>
            ) : (
              <Button
                css={wide}
                primary="true"
                onClick={e => {
                  let multiple = true;
                  handlers.handleAddEdition(e, multiple);
                  handlers.setMultipleEditions(multiple);
                }}
              >
                Yes
              </Button>
            )}
          </div>
        </div>

        {state.editions.length !== 0 && (
          <>
            <h2 css={margins("10px 0")}>Price, materials, and colors</h2>
            {state.editions.map((edition: any, eIdx: number) => (
              <div key={eIdx}>
                {state.editions[eIdx].name !== undefined && (
                  <div css={[borderBox, margins("0 0 20px 0")]}>
                    <h5>Edition name</h5>
                    <Input
                      type="text"
                      icon="icon ion-ios-at"
                      placeholder="Name of this edition"
                      name="name"
                      onChange={(e: any) => {
                        let str = true;
                        handlers.handlePrice(eIdx, e.target.value, str);
                      }}
                    />
                  </div>
                )}
                <div css={[borderBox, margins("0 0 20px 0")]}>
                  <h5>Price</h5>
                  <Input
                    type="text"
                    icon="icon ion-logo-usd"
                    placeholder="Price"
                    name="price"
                    onChange={(e: any) => {
                      let input = parseInt(e.target.value);
                      handlers.handlePrice(eIdx, input);
                    }}
                  />
                </div>
                <div css={[borderBox, margins("0 0 20px 0")]}>
                  <h5>Case materials</h5>
                  {edition.cases.map((c: any, cIndex: number) => (
                    <div css={[flex.row, flex.itemscenter, multiInputMargin]}>
                      <Input
                        type="text"
                        icon="icon ion-ios-construct"
                        placeholder="e.g. Aluminum"
                        name="material"
                        onChange={(e: any) => {
                          let input = e.target.value;
                          handlers.handleChange(
                            e,
                            edition.cases,
                            cIndex,
                            input
                          );
                        }}
                      />
                      <DeleteButton
                        icon="icon ion-ios-trash"
                        onClick={(e: any) => {
                          handlers.handleDeleteString(e, cIndex, edition.cases);
                        }}
                      />
                    </div>
                  ))}
                  <Button
                    small="true"
                    onClick={e => {
                      handlers.handleAddString(e, edition.cases);
                    }}
                  >
                    Add another
                  </Button>
                </div>
                <div css={[borderBox, margins("0 0 20px 0")]}>
                  <h5>Plate materials</h5>
                  {state.editions[eIdx].plates.map((p: any, pIndex: number) => (
                    <div
                      key={pIndex}
                      css={[flex.row, flex.itemscenter, multiInputMargin]}
                    >
                      <Input
                        type="text"
                        icon="icon ion-ios-hammer"
                        placeholder="e.g. Aluminum"
                        name="material"
                        onChange={(e: any) => {
                          let input = e.target.value;
                          handlers.handleChange(
                            e,
                            edition.plates,
                            pIndex,
                            input
                          );
                        }}
                      />
                      <DeleteButton
                        icon="icon ion-ios-trash"
                        onClick={(e: any) => {
                          handlers.handleDeleteString(
                            e,
                            pIndex,
                            edition.plates
                          );
                        }}
                      />
                    </div>
                  ))}
                  <Button
                    small="true"
                    onClick={e => {
                      handlers.handleAddString(e, edition.plates);
                    }}
                  >
                    Add another plate
                  </Button>
                </div>
                <div css={[borderBox, margins("0 0 20px 0")]}>
                  <h5>
                    {edition.colors.length === 0
                      ? "Do you want to provide colors?"
                      : "Colors"}
                  </h5>
                  {edition.colors.map((p: any, colorIndex: number) => (
                    <div
                      key={colorIndex}
                      css={[flex.row, flex.itemscenter, multiInputMargin]}
                    >
                      <Input
                        type="text"
                        icon="icon ion-ios-color-fill"
                        placeholder="colors"
                        name="material"
                        onChange={(e: any) => {
                          let input = e.target.value;
                          handlers.handleChange(
                            e,
                            edition.colors,
                            colorIndex,
                            input
                          );
                        }}
                      />
                      <DeleteButton
                        icon="icon ion-ios-trash"
                        onClick={(e: any) => {
                          handlers.handleDeleteString(
                            e,
                            edition.colors,
                            colorIndex
                          );
                        }}
                      />
                    </div>
                  ))}
                  <Button
                    small="true"
                    onClick={e => handlers.handleAddString(e, edition.colors)}
                  >
                    Add another color
                  </Button>
                </div>
              </div>
            ))}
            {multipleEditions && (
              <Button
                primary="true"
                onClick={e => handlers.handleAddEdition(e, true)}
              >
                Add another edition
              </Button>
            )}
            <>
              <h2 css={margins("60px 0 10px 0")}>Layouts, and information</h2>
              <div css={[borderBox, margins("0 0 20px 0")]}>
                <h5>Layouts</h5>
                {state.layouts.map((layout: string, layoutIndex: number) => (
                  <div
                    key={layoutIndex}
                    css={[flex.row, flex.itemscenter, multiInputMargin]}
                  >
                    <Input
                      type="text"
                      icon="icon ion-ios-return-left"
                      placeholder="e.g. WK (without blockers)"
                      name="layout"
                      onChange={(e: any) => {
                        let input = e.target.value;
                        handlers.handleChange(
                          e,
                          state.layouts,
                          layoutIndex,
                          input
                        );
                      }}
                    />
                    <DeleteButton icon="icon ion-ios-trash" />
                  </div>
                ))}

                <Button
                  small="true"
                  onClick={(e: any) =>
                    handlers.handleAddString(e, state.layouts)
                  }
                >
                  Add another
                </Button>
              </div>
              <div css={[borderBox, margins("0 0 20px 0")]}>
                <h5>Layout support</h5>
                {state.support.map((support: string, supportIndex: number) => (
                  <div
                    key={supportIndex}
                    css={[flex.row, flex.itemscenter, multiInputMargin]}
                  >
                    <Input
                      type="text"
                      icon="icon ion-ios-globe"
                      placeholder="e.g. ISO"
                      name="support"
                      onChange={(e: any) => {
                        let input = e.target.value;
                        handlers.handleChange(
                          e,
                          state.support,
                          supportIndex,
                          input
                        );
                      }}
                    />
                    <DeleteButton icon="icon ion-ios-trash" />
                  </div>
                ))}
                <Button
                  small="true"
                  onClick={e => handlers.handleAddString(e, state.support)}
                >
                  Add another
                </Button>
              </div>
              <div css={[borderBox, margins("0 0 20px 0")]}>
                <h5>Details</h5>
                {state.details.map((d: string, detailIndex: number) => (
                  <TextArea
                    margins="0 0 10px 0"
                    name="details"
                    onChange={(e: any) => {
                      let input = e.target.value;
                      handlers.handleChange(
                        e,
                        state.details,
                        detailIndex,
                        input
                      );
                    }}
                  ></TextArea>
                ))}
                <Button
                  small="true"
                  onClick={e => handlers.handleAddString(e, state.details)}
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
      </form>
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
