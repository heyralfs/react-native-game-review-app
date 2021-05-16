import React from "react";
import { TextInput, Text, View } from "react-native";
import FlatButton from "../shared/button";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={handleChange("title")}
              value={values.title}
            />
            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              minHeight={120}
              placeholder="Review body"
              onChangeText={handleChange("body")}
              value={values.body}
            />
            <Text style={globalStyles.errorText}>
              {touched.body && errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {touched.rating && errors.rating}
            </Text>

            <FlatButton text="submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
