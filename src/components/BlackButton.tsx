import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CharacterSelector = () => {
  // States to manage selected body type
  const [selectedBodyType, setSelectedBodyType] = useState('lean');

  // Function to handle body type selection
  const handleBodyTypeSelect = (bodyType) => {
    setSelectedBodyType(bodyType);
  };

  // Placeholder data for the characters
  const characters = {
    lean: [
        require('../components/BottomAvatar1.jpg'),
        require('../components/BottomAvatar2.jpg'),
        require('../components/BottomAvatar3.jpg'),
        require('../components/BottomAvatar4.jpg'),
        require('../components/BottomAvatar5.jpg'),
        
    ],
    muscular: [
        require('../components/BottomAvatar1.jpg'),
        require('../components/BottomAvatar2.jpg'),
        require('../components/BottomAvatar3.jpg'),
        require('../components/BottomAvatar4.jpg'),
        require('../components/BottomAvatar5.jpg'),
    ],
    curvy: [
        require('../components/BottomAvatar1.jpg'),
        require('../components/BottomAvatar2.jpg'),
        require('../components/BottomAvatar3.jpg'),
        require('../components/BottomAvatar4.jpg'),
        require('../components/BottomAvatar5.jpg'),
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleBodyTypeSelect('lean')}>
          <Text style={selectedBodyType === 'lean' ? styles.activeTab : styles.tab}>Lean</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBodyTypeSelect('muscular')}>
          <Text style={selectedBodyType === 'muscular' ? styles.activeTab : styles.tab}>Muscular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBodyTypeSelect('curvy')}>
          <Text style={selectedBodyType === 'curvy' ? styles.activeTab : styles.tab}>Curvy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.characterContainer}>
        {characters[selectedBodyType].map((character, index) => (
          <Image key={index} source={character}  style={styles.character} />
        ))}
         {characters[selectedBodyType].map((character, index) => (
          <Image key={index} source={character}  style={styles.character} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D4D4B1A',
    zIndex: 2,
    borderRadius : 25,
    opacity : 1
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '99%',
    padding: 10,
    backgroundColor : 'white',
    marginVertical : 5,
    borderRadius : 25,
  },
  tab: {
    color: 'black'
  },
  activeTab: {
    color: 'black',
    fontWeight: 'bold',
    fontSize : 16,
  },
  characterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex : 1,
    flexWrap : 'wrap'
  },
  character: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    marginHorizontal: 6,
    marginVertical : 10
  }
});

export default CharacterSelector;
