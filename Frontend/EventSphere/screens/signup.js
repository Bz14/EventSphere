import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, FieldErrors } from "react-hook-form";

const schema = yup.object({
  name: yup.string().required("Full name is required."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid email format."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .matches(/(?=.*[0-9])/, "Password must contain at least one number.")
    .matches(
      /(?=.*[@$!%*?&])/,
      "Password must contain at least one special character."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match.")
    .required("Please confirm your password."),
});

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSignup = () => {
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <View className="flex-1 bg-white items-center px-6 justify-center">
      <View className="absolute top-14 left-6">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#7E57C2" />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/onboarding/logo.png")}
        className="bg-primaryPurple w-20 h-20 rounded-full mb-6 p-2"
      />
      <Text className="text-2xl font-bold text-primaryPurple mb-6">
        Create Your Account
      </Text>
      <View className="flex-row items-center border gap-2 border-gray-300 rounded-xl px-3 p-1 mb-4">
        <Icon name="person" size={22} color="#7E57C2" />
        <TextInput
          className="flex-1 py-2 text-base"
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View className="flex-row items-center border gap-2 border-gray-300 rounded-xl px-3 p-1 mb-4">
        <Icon name="mail" size={22} color="#7F57C4" />
        <TextInput
          className="flex-1 py-2 text-base"
          keyboardType="email-address"
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="flex-row items-center border gap-2 border-gray-300 rounded-xl px-3 p-1 mb-4">
        <Icon name="lock-closed" size={22} color="#7F57C4" />
        <TextInput
          className="flex-1 py-2 text-base"
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          className="ml-2"
        >
          <Icon
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={22}
            color="#7F57C4"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center border gap-2 border-gray-300 rounded-xl px-3 p-1 mb-4">
        <Icon name="lock-closed" size={22} color="#7F57C4" />
        <TextInput
          className="flex-1 py-2 text-base"
          placeholder="Confirm Password"
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          className="ml-2"
        >
          <Icon
            name={isConfirmPasswordVisible ? "eye" : "eye-off"}
            size={22}
            color="#7F57C4"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleSignup}
        className="w-full bg-primaryPurple rounded-xl py-3 mt-3 mb-4"
      >
        <Text className="text-center text-white font-bold text-lg">
          Sign Up
        </Text>
      </TouchableOpacity>
      <Text className="mt-1 mb-4 text-primary">OR</Text>
      <TouchableOpacity
        onPress={() => console.log("Google Signup")}
        className="w-full flex-row items-center justify-center border border-gray-300 rounded-xl py-3 mb-6"
      >
        <Image
          source={require("../assets/onboarding/google.png")}
          className="w-5 h-5 mr-2"
        />
        <Text className="text-primary shadow-lg font-bold text-lg">
          Sign Up with Google
        </Text>
      </TouchableOpacity>
      <View className="flex-row">
        <Text className="text-gray-500">Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-primaryPurple font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
