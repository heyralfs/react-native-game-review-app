import React from "react";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={handleChange("title")}
              value={values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={handleChange("body")}
              value={values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
            />

            <Button title="submit" color="#2E8B57" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
