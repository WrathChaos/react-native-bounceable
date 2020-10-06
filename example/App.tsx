import React from "react";
import { View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import ProfileHeader from "react-native-profile-header";
import IGStoryCircle from "react-native-instagram-story-circle";

const coloredNotification = require("./assets/notification-colored.png");
const notification = require("./assets/notification.png");

const stories = [
  {
    key: "Lorem Sit",
    hasStory: true,
    storyRingColor: ["#20fab1", "#20fab1"],
    notificationCount: 3,
    source: {
      uri:
        "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    key: "Parturient Aenean Fringilla",
    hasStory: true,
    storyRingColor: ["#eb3434", "#eb3434"],
    isStoryRead: true,
    source: {
      uri:
        "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    key: "Parturient",
    hasStory: true,
    storyRingColor: ["#e22ae8", "#e22ae8"],
    source: {
      uri:
        "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  },
  {
    key: "Adipiscing",
    hasStory: true,
    storyRingColor: ["#3492eb", "#3492eb"],
    notificationCount: 16,
    source: {
      uri:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    key: "Mollis",
    hasStory: true,
    notificationCount: 1,
    source: {
      uri:
        "https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
  {
    key: "Dapibus Euismod",
    hasStory: true,
    source: {
      uri:
        "https://images.unsplash.com/photo-1539811107033-3a67f3ebc852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    },
  },
  {
    key: "Pellentesque",
    hasStory: true,
    source: {
      uri:
        "https://images.unsplash.com/photo-1551292831-023188e78222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  },
];

const App = () => {
  const [notificationIcon, setNotificationIcon] = React.useState(notification);

  const renderIGStories = () => (
    <ScrollView
      horizontal
      style={{ marginTop: 16 }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        margin: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {stories.map((item) => {
        return (
          <View key={item.name} style={{ marginLeft: 12 }}>
            <IGStoryCircle
              {...item}
              innerBorderColor="#fff"
              source={item.source}
              hasStory={item.hasStory}
              onPress={() => {}}
            />
          </View>
        );
      })}
    </ScrollView>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ProfileHeader
          titleText="Profile"
          thirdIconImageSource={notificationIcon}
          onThirdIconPress={() => {
            if (notificationIcon === notification)
              setNotificationIcon(coloredNotification);
            else setNotificationIcon(notification);
          }}
        />
        {renderIGStories()}
      </SafeAreaView>
    </>
  );
};

export default App;
