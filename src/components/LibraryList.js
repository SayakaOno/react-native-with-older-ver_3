import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

const LibraryList = ({libraries}) => {
  return (
    <FlatList
      data={libraries}
      renderItem={renderItem}
      keyExtractor={library => library.id}
    />
  );
};

const renderItem = library => {
  return <ListItem library={library} />;
};

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
