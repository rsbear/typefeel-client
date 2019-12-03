import React, { FC } from "react";
import Layout from "components/layouts/Layout";
import { text } from "styles/text";
import { GetProps } from "interfaces/GetProps";
import { useKeyboardQuery } from "generated/graphql";
import { Formik } from "formik";
import { FormikInput, FormikArea } from "styles/inputs";
import { Button } from "styles/buttons";

const KeyboardMessage: GetProps<any> = ({ authUser, shortId }) => {
  const { loading, error, data } = useKeyboardQuery({ variables: { shortId } });
  const kb = !loading && data && data.keyboard;
  return (
    <Layout title="Announcement" authUser={authUser}>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Oops, an error occured</h2>}
      {!loading && data && data.keyboard && (
        <>
          <h1 css={text.heading}>{kb.name} announcement</h1>
          <h4>
            Create an announcement about changes or updates to your project
          </h4>
          <Formik initialValues={{ message: "" }} onSubmit={() => {}}>
            {({ values }) => (
              <form onSubmit={() => {}}>
                <FormikArea
                  icon="icon ion-ios-information-circle"
                  margins="30px 0 10px 0"
                  type="text"
                  placeholder="Annoucement message"
                  name="message"
                />
                <Button primary="submit" type="button">
                  Post announcement
                </Button>
              </form>
            )}
          </Formik>
        </>
      )}
    </Layout>
  );
};

KeyboardMessage.getInitialProps = async (context: any) => {
  const { shortId } = context.query;
  return { shortId };
};

export default KeyboardMessage;
