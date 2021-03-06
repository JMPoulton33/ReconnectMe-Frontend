import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
} from 'react-native';

import AcceptRejectBox from './AcceptRejectBox';

const EventItem = ({
  eventTitle,
  eventTime,
  eventDate,
  eventLocation,
  eventIsRequest,
  eventId,
  handleNavigation,
  addEventToDate,
  toggleIsRequest,
}) => {
  const handleEventPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Edit Event',
          'Create New Event on this Day',
          'See Event Details',
          'Cancel',
        ],
        cancelButtonIndex: 3,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log('Edit Event');
        }
        if (buttonIndex === 1) {
          handleNavigation('New Event', {
            addEventToDate: addEventToDate,
          });
        }
        if (buttonIndex === 2) {
          console.log('See Event Details');
        }
        if (buttonIndex === 3) {
        }
      },
    );
  };

  return (
    <View>
      <View>
        {eventIsRequest ? (
          <View style={styles.requestFromContainer}>
            <Text style={styles.requestFromText}>
              Request From: Andre Lellis
            </Text>
          </View>
        ) : (
          <View />
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.item,
          styles.itemShadow,
          eventIsRequest ? styles.itemTopCorners : styles.item,
        ]}
        onPress={handleEventPress}
      >
        <View>
          <Text style={styles.eventItemText}>{eventTitle}</Text>
          <View style={styles.timeLocationContainer}>
            {eventTime ? (
              <View>
                <Text style={styles.eventBodyText}>{eventTime}</Text>
              </View>
            ) : (
              <Text />
            )}
            {eventLocation ? (
              <View>
                <Text style={styles.eventBodyText}>{eventLocation}</Text>
              </View>
            ) : (
              <Text />
            )}
          </View>
          <View>
            {eventIsRequest ? (
              <AcceptRejectBox
                toggleIsRequest={toggleIsRequest}
                eventId={eventId}
                eventDate={eventDate}
              />
            ) : (
              <View />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#C4E8E8',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    minHeight: 57.5,
  },
  itemShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  eventItemText: {
    color: 'black',
    fontSize: 24,
    marginHorizontal: 10,
  },
  timeLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  eventBodyText: {
    fontSize: 20,
  },
  requestFromContainer: {
    borderColor: 'black',
    borderWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: -17,
    marginTop: 17,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fec79a',
  },
  requestFromText: {
    fontSize: 20,
  },
  itemTopCorners: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default EventItem;
