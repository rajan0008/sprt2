import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Carousel from 'react-native-snap-carousel';
const players = [
  { id: '1', image: 'https://images.firstpost.com/uploads/2024/02/MS-Dhoni-CSK-IPL-2023-PTI-1200-2024-02-9c8c7d515e57c707fd33cef140b5d687.jpg?im=FitAndFill=(596,336)' },
  { id: '2', image: 'https://images.firstpost.com/uploads/2024/02/MS-Dhoni-CSK-IPL-2023-PTI-1200-2024-02-9c8c7d515e57c707fd33cef140b5d687.jpg?im=FitAndFill=(596,336)' },
  { id: '3', image: 'https://images.firstpost.com/uploads/2024/02/MS-Dhoni-CSK-IPL-2023-PTI-1200-2024-02-9c8c7d515e57c707fd33cef140b5d687.jpg?im=FitAndFill=(596,336)' },
  { id: '4', image: 'https://images.firstpost.com/uploads/2024/02/MS-Dhoni-CSK-IPL-2023-PTI-1200-2024-02-9c8c7d515e57c707fd33cef140b5d687.jpg?im=FitAndFill=(596,336)' },
  { id: '5', image: 'https://images.firstpost.com/uploads/2024/02/MS-Dhoni-CSK-IPL-2023-PTI-1200-2024-02-9c8c7d515e57c707fd33cef140b5d687.jpg?im=FitAndFill=(596,336)' },
  { id: '6', image: 'https://images.firstpost.com/uploads/2024/02/MS-Dhoni-CSK-IPL-2023-PTI-1200-2024-02-9c8c7d515e57c707fd33cef140b5d687.jpg?im=FitAndFill=(596,336)' },
  { id: '7', image: 'https://images.firstpost.com/uploads/2024/02/MS-Dhoni-CSK-IPL-2023-PTI-1200-2024-02-9c8c7d515e57c707fd33cef140b5d687.jpg?im=FitAndFill=(596,336)' },
  // Add more players as needed

];

const { width } = Dimensions.get('window');

const data = [
  { title: 'The Sports Gurukul Academy', image: 'https://link-to-image-1.com' },
  { title: 'Another Slide', image: 'https://link-to-image-2.com' },
  { title: 'Yet Another Slide', image: 'https://link-to-image-3.com' }
];

const renderItem = ({ item }) => (
  <View style={styles.slide}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
  </View>
);
const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://icdn.isrgrajan.com/in/2022/11/Virat-Kohli.jpg' }} // Replace with your image URL
          />
          <View>
            <Text style={styles.welcomeText}>Rajan prudhvi</Text>
            <View style={styles.location}>
            <Image
  style={styles.locationicon}
    source={{uri : 'data:image/png;base64,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' }} />
      
   


            <Text style={styles.locationText}>Hyderabad</Text>
            </View>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image
            style={styles.notificationIcon}
            source={{ uri: 'https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-verte.png' }} // Replace with your image URL
          />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        
        <TextInput
        
          style={styles.searchInput}
          
          placeholder="Search venues, Players, games..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image
            style={styles.searchIcon}
            source={{ uri: 'https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png' }} // Replace with your image URL
          />
        </TouchableOpacity>
      </View>

      {/* Banner Section */}
    
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={{ uri: 'https://wallpapers.com/images/featured/football-stadium-wpbk2e4mrt3gz1mz.jpg' }} // Replace with your image URL
        />
        <Text style={styles.bannerText}>The Sports Gurukul Academy</Text>
      </View>
      
      <View style={styles.container}>
      {/* <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        layout="default"
      /> */}
    </View>
      
      

      {/* Sports Section */}
      <View style={styles.sportsContainer}>
        <Text style={styles.sportsHeaderText}>Pick A Sport</Text>
        <Text style={styles.viewAllText}>View all</Text>
      </View>

      {/* Sports Icons */}
      {/* <View style={styles.iconsContainer}>
        {['football', 'Tennis', 'badminton', 'Cricket', 'volleyball'].map((sport, index) => (
          <TouchableOpacity key={index} style={styles.iconWrapper}>
            <Image
              style={styles.sportIcon}
              source={{ uri: 'https://e7.pngegg.com/pngimages/949/670/png-clipart-football-drawing-soccer-ball-sport-sports-equipment.png' }} // Replace with your image URLs
            />
            <Text style={styles.sportText}>{sport}</Text>
          </TouchableOpacity>
        ))}
      </View>*/}
      <View style={styles.sportsContainer}> 
        <Text style={styles.sportsHeaderText}>Live Match</Text>
        
      </View>
      <View style={styles.header}>
         <Image
            style={styles.locationicon1}
            source={{ uri: 'data:image/png;base64,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' }} />
        <Text style={styles.headerTitle}>ITI Ground</Text>
        <Text style={styles.headerSubtitle}>Foot Ball</Text>
        
        <Text style={styles.headerDescription}>Team 1 vs Team 2</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.teamContainer}>
            <Image
              style={styles.teamLogo}
              source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20231017/pngtree-icc-cricket-world-match-background-image_13943187.jpg' }} // Replace with your image URL
            />
            <Text style={styles.teamName}>Team 1</Text>
          </View>
          <Text style={styles.score}>1 : 1</Text>
          <View style={styles.teamContainer}>
            <Image
              style={styles.teamLogo}
              source={{ uri: 'https://www.shutterstock.com/image-vector/night-cricket-stadium-illustration-vector-600nw-2160100275.jpg' }} // Replace with your image URL
            />
            <Text style={styles.teamName}>Team 2</Text>
          </View>
        </View>
      </View>

      {/* Upcoming Events Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.upcomingEventsContainer}>
        <View style={styles.eventCard}>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTime}>06:20</Text>
            <Text style={styles.eventDate}>17 Aug</Text>
            <Text style={styles.eventTeam}>Team 1</Text>
            <View style={styles.playersContainer}>
              {/* Add player avatars */}
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              {/* Add more player avatars as needed */}
              <Text style={styles.playersText}>+6 more</Text>
            </View>
          </View>
        </View>
        <View style={styles.eventCard}>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTime}>06:20</Text>
            <Text style={styles.eventDate}>17 Aug</Text>
            <Text style={styles.eventTeam}>Team 1</Text>
            <View style={styles.playersContainer}>
              {/* Add player avatars */}
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Text style={styles.playersText}>Players +6</Text>
            </View>
          </View>
        </View>
        <View style={styles.eventCard}>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTime}>06:20</Text>
            <Text style={styles.eventDate}>17 Aug</Text>
            <Text style={styles.eventTeam}>Team 1</Text>
            <View style={styles.playersContainer}>
              {/* Add player avatars */}
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Text style={styles.playersText}>Players +6</Text>
            </View>
          </View>
        </View>
        <View style={styles.eventCard}>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTime}>06:20</Text>
            <Text style={styles.eventDate}>17 Aug</Text>
            <Text style={styles.eventTeam}>Team 1</Text>
            <View style={styles.playersContainer}>
              {/* Add player avatars */}
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Image
                style={styles.playerAvatar}
                source={{ uri: 'https://i.pinimg.com/736x/4d/db/2f/4ddb2f735b96922b8139b28764dc5bc6.jpg' }} // Replace with your image URL
              />
              <Text style={styles.playersText}>Players +6</Text>
            </View>
          </View>
        </View>
        {/* Add more event cards as needed */}
      </ScrollView>

      {/* Nearby Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Near by You</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nearbyContainer}>
        <View style={styles.groundCard}>
          <Image
            style={styles.groundImage}
            source={{ uri: 'https://www.shutterstock.com/image-vector/night-cricket-stadium-illustration-vector-600nw-2160100275.jpg' }} // Replace with your image URL
          />
          <Text style={styles.groundName}>ITI Ground</Text>
          <Text style={styles.groundPrice}>Rs. 300 Onwards</Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groundCard}>
          <Image
            style={styles.groundImage}
            source={{ uri: 'https://www.shutterstock.com/image-vector/night-cricket-stadium-illustration-vector-600nw-2160100275.jpg' }} // Replace with your image URL
          />
          <Text style={styles.groundName}>ITI Ground</Text>
          <Text style={styles.groundPrice}>Rs. 300 Onwards</Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groundCard}>
          <Image
            style={styles.groundImage}
            source={{ uri: 'https://www.shutterstock.com/image-vector/night-cricket-stadium-illustration-vector-600nw-2160100275.jpg' }} // Replace with your image URL
          />
          <Text style={styles.groundName}>ITI Ground</Text>
          <Text style={styles.groundPrice}>Rs. 300 Onwards</Text>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
       
        {/* Add more ground cards as needed */}
      </View>
      
      <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Players</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={players}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.playerImage} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    
    <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Jion Team</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.upcomingEventsContainer}>
     
     
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Football Tournament</Text>
        <View style={styles.infoRow}>
          <Icon name="map-marker" color="#FF5733" size={16} />
          <Text style={styles.text}>MRG Ground</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="calendar" color="#FF5733" size={16} />
          <Text style={styles.text}>19 Aug, 12:00PM</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.price}>₹ 150/- per player</Text>
          <Icon name="soccer" color="#FF5733" size={16} />
          <Text style={styles.text}>Football</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.joined}>8 / 11 Joined</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.container}>
    <View style={styles.Tournament}>
    
      <View style={styles.card}>
        <Text style={styles.title}>Football Tournament</Text>
        <View style={styles.infoRow}>
          <Icon name="map-marker" color="#FF5733" size={16} />
          <Text style={styles.text}>MRG Ground</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="calendar" color="#FF5733" size={16} />
          <Text style={styles.text}>19 Aug, 12:00PM</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.price}>₹ 150/- per player</Text>
          <Icon name="soccer" color="#FF5733" size={16} />
          <Text style={styles.text}>Football</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.joined}>8 / 11 Joined</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.Tournament}>
      <View style={styles.card}>
        <Text style={styles.title}>Football Tournament</Text>
        <View style={styles.infoRow}>
          <Icon name="map-marker" color="#FF5733" size={16} />
          <Text style={styles.text}>MRG Ground</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="calendar" color="#FF5733" size={16} />
          <Text style={styles.text}>19 Aug, 12:00PM</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.price}>₹ 150/- per player</Text>
          <Icon name="soccer" color="#FF5733" size={16} />
          <Text style={styles.text}>Football</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.joined}>8 / 11 Joined</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
       
    </ScrollView>

    <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Coaching</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.upcomingEventsContainer}>
      <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.toopa.com/458512_women-world-cup-melbourne-fed-square-matildas.jpg' }} // replace with your image URL
          style={styles.image}
        />
        <View>
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>Explore More</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Football</Text>
        <Text style={styles.price}>Rs. 300 Onwards</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.toopa.com/458512_women-world-cup-melbourne-fed-square-matildas.jpg' }} // replace with your image URL
          style={styles.image}
        />
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>Explore More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Football</Text>
        <Text style={styles.price}>Rs. 300 Onwards</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.toopa.com/458512_women-world-cup-melbourne-fed-square-matildas.jpg' }} // replace with your image URL
          style={styles.image}
        />
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>Explore More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Football</Text>
        <Text style={styles.price}>Rs. 300 Onwards</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://images.toopa.com/458512_women-world-cup-melbourne-fed-square-matildas.jpg' }} // replace with your image URL
          style={styles.image}
        />
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreText}>Explore More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Football</Text>
        <Text style={styles.price}>Rs. 300 Onwards</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>

    </ScrollView>
    </ScrollView>
    
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 200,
    width: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#d91e1e', // Red color
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
    
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 16,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold'
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
  },
  notificationContainer: {
    padding: 8,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontStyle:'normal'
    
  },
  searchButton: {
    marginLeft: 8,
    padding: 8,
    marginRight: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    
  },
  bannerContainer: {
    padding: 16,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 220,
    borderRadius: 30,
  },
  bannerText: {
    position: 'absolute',
    bottom: 16,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sportsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sportsHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  viewAllText: {
    fontSize: 14,
    color: '#d91e1e',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    color:'black',
    fontSize: 16,
    fontWeight: 'bold',
   
  },
  iconWrapper: {
    alignItems: 'center',
  },
  sportIcon: {
    width: 50,
    height: 50,
  },
  sportText: {
    marginTop: 8,
    fontSize: 12,
    color:'black'
  },
  location:{
    flexDirection : 'row'
  },
  locationicon:{
    width: 10,
    height: 20,
    marginRight:5,
    marginTop:1.5,
    
  },
  locationicon1:{
    width: 15,
    height: 15,
    marginBottom:98,
    
  },
  headerTitle: {
    color: '#fff',
    fontSize: 13,
    marginBottom:100, 
    paddingLeft:-100,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom:60,
    paddingLeft:30,
    fontWeight: 'bold',
    textAlign:'center'
  },
  headerDescription: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    marginLeft:-100,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    marginRight : 75,
    marginLeft:-180,
    
  },
  teamContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginBottom: 4,
    borderRadius:100,
  },
  teamName: {
    color: '#fff',
    fontSize: 14,
  },
  score: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
  // viewAllText: {
  //   fontSize: 14,
  //   color: '#d91e1e',
  // },
  upcomingEventsContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
    maxWidth:'100%'
    
    
  },
  eventCard: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
    width: 200,
  },
  eventDetails: {
    alignItems: 'center',
  },
  eventTime: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'black'
  },
  eventDate: {
    fontSize: 16,
    marginTop: 4,
     color:'black'
  },
  eventTeam: {
    fontSize: 14,
    marginTop: 4,
    color:'black'
  },
  playersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,

     
  },
  playersText: {
    fontSize: 12,
    color: '#888',
  },
  nearbyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  groundCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    flex: 1,
    
  },
  groundImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  groundName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color:'black'
  },
  groundPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  bookNowButton: {
    backgroundColor: '#d91e1e',
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  bookNowText: {
    color: '#fff',
    textAlign: 'center',
  },
  playerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  playerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    marginTop:10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  viewAll:{
    fontWeight:'bold'   
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  text: {
    marginLeft: 4,
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  joined: {
    fontSize: 14,
    color: '#d32f2f',
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  Tournament:{
    marginLeft:20,
  },
  // card: {
  //   backgroundColor: 'white',
  //   borderRadius: 8,
  //   overflow: 'hidden',
  //   margin: 10,
    
    
  //   shadowColor: '#000',
  //   shadowOpacity: 0.1,
  //   shadowRadius: 10,
  //   elevation: 3,
  // },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100, // Adjust height based on your design
  },
  exploreButton: {
    position: 'absolute',
    bottom: 10,
    left: '25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    
  },
  exploreText: {
    color: 'white',
    fontSize: 12,
  },
  infoContainer: {
    padding: 10,
  },
  //title: {
   // fontSize: 16,
   // fontWeight: 'bold',
   // color: '#333',
  //},
 // price: {
   // fontSize: 14,
   // color: '#888',
   // marginVertical: 5,
 // },//

  joinButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
   
});

export default App;


