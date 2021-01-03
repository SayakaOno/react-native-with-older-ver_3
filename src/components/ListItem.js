import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {CardSection} from './common';

const ListItem = ({library}) => {
  const {titleStyle} = styles;

  return (
    <CardSection>
      <Text style={titleStyle}>{library.item.title}</Text>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});
export default ListItem;