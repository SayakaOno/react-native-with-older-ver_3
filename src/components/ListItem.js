import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

const ListItem = ({library, selectLibrary, expanded}) => {
  const {titleStyle} = styles;
  const {id, title, description} = library.item;

  useEffect(() => {
    LayoutAnimation.spring();
  });

  const renderDescription = () => {
    if (expanded) {
      return (
        <CardSection>
          <Text>{description}</Text>
        </CardSection>
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
      <View>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.selectedLibraryId === ownProps.library.item.id,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(ListItem);
