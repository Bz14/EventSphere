import { View, Text, Image } from "react-native";

const EventCard = ({ image, name, date, location, time, participant }) => {
  return (
    <View
      className="rounded-lg shadow-lg bg-white border border-gray-200 p-4 ml-2"
      style={{ width: 250 }}
    >
      <Image
        source={image}
        className="rounded-lg mb-4"
        style={{ width: "100%", height: 150 }}
      />

      <View className="space-y-2">
        <Text className="text-lg font-bold text-primaryPurple">{name}</Text>
        <Text className="text-sm text-gray-500">{date}</Text>
        <Text className="text-sm text-gray-700">
          <Text className="font-semibold">Location: </Text>
          {location}
        </Text>
        <Text className="text-sm text-gray-700">
          <Text className="font-semibold">Time: </Text>
          {time}
        </Text>
        <Text className="text-sm text-gray-700">
          <Text className="font-semibold">Participants: </Text>
          {participant}
        </Text>
      </View>
    </View>
  );
};

export default EventCard;