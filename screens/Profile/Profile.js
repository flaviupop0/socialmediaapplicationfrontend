import React from 'react';
import {Image, SafeAreaView, Text, ScrollView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Style from './Style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View>
          <View style={Style.profileContainer}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={Style.profileImage}
            />
          </View>
          <Text style={Style.name}>Flaviu Pop</Text>
        </View>
        <View style={Style.informationContainer}>
          <View style={Style.stat}>
            <Text style={Style.numbers}>45</Text>
            <Text style={Style.statType}>Following</Text>
          </View>
          <View style={Style.statBorder} />
          <View style={Style.stat}>
            <Text style={Style.numbers}>30M</Text>
            <Text style={Style.statType}>Followers</Text>
          </View>
          <View style={Style.statBorder} />
          <View style={Style.stat}>
            <Text style={Style.numbers}>100</Text>
            <Text style={Style.statType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
