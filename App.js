import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPosts from './components/UserPosts/UserPosts';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Mama',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Alex',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Flaviu',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Puiu',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Ionut',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Daniel',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Mihai',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Gabi',
      id: 9,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 10,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 11,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 12,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 13,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 14,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 15,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 16,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 17,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 18,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 19,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 20,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
    {
      firstName: 'Gabi',
      id: 21,
      profileImage: require('./assets/images/image1_0.jpg'),
    },
  ];

  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'London',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Diana',
      lastName: 'Pop',
      location: 'Cluj-Napoca',
      likes: 2000,
      comments: 50,
      bookmarks: 69,
      id: 2,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Gabriel',
      lastName: 'Pop',
      location: 'Floresti',
      likes: 0,
      comments: 0,
      bookmarks: 0,
      id: 3,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Un nume',
      lastName: 'Un alt nume',
      likes: -1,
      comments: -1,
      bookmarks: -1,
      id: 4,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Mihai',
      lastName: 'V',
      location: 'Baia Mare',
      likes: 5,
      comments: 10,
      bookmarks: 20,
      id: 5,
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startingIndex = (currentPage - 1) * pageSize;
    const endIndex = startingIndex + pageSize;
    if (startingIndex >= database.length) {
      return [];
    }
    return database.slice(startingIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={"Let's Explore!"} />
                <TouchableOpacity style={globalStyle.envelope}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#898DAE"
                    size={20}
                  />
                  <View style={globalStyle.messageContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      profileImage={item.profileImage}
                      firstName={item.firstName}
                    />
                  )}
                />
              </View>
            </>
          }
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={globalStyle.userPostContainer}>
              <UserPosts
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
