import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useProfile } from '@/hooks/useProfile';
import { ProfileImage } from '@/components/ProfileImage';
import { NotificationButton } from '@/components/NotificationButton';
import { ProfileHeader } from '@/components/ProfileHeader';
import { CustomButton } from '@/components/CustomButton';

export default function ProfileScreen() {
  const {
    profileImage,
    handleImagePicker,
    sendNotification,
    isLoading
  } = useProfile();

  return (
    <View style={styles.container}>
      <ProfileHeader />
      
      <ProfileImage
        uri={profileImage}
        onPress={handleImagePicker}
        size={200}
      />

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Seleccionar Imagen"
          onPress={handleImagePicker}
          icon="image-outline"
          disabled={isLoading}
        />

        <NotificationButton
          onPress={sendNotification}
          disabled={isLoading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    gap: 10
  }
});
