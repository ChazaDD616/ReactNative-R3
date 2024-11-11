import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useGyroscope } from '@/hooks/useGyroscope';
import { useLocation } from '@/hooks/useLocation';
import { MenuButton } from '@/components/MenuButton';
import { GyroscopeDisplay } from '@/components/GyroscopeDisplay';
import { shareApp } from '@/utils/share';

const MenuScreen = () => {
  const router = useRouter();
  const { gyroscopeData, showGyroscopeData } = useGyroscope();
  const { getCurrentLocation } = useLocation();

  const menuOptions = [
    {
      title: 'Ir a Perfil',
      onPress: () => router.push('/profile'),
      icon: 'person-outline'
    },
    {
      title: 'Mostrar Ubicación',
      onPress: getCurrentLocation,
      icon: 'location-outline'
    },
    {
      title: 'Compartir App',
      onPress: shareApp,
      icon: 'share-social-outline'
    },
    {
      title: 'Datos del Giroscopio',
      onPress: showGyroscopeData,
      icon: 'compass-outline'
    }
  ];

  return (
    <View style={styles.container}>
      {menuOptions.map((option, index) => (
        <MenuButton
          key={index}
          title={option.title}
          onPress={option.onPress}
          icon={option.icon}
        />
      ))}
      <GyroscopeDisplay data={gyroscopeData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});

export default MenuScreen;
