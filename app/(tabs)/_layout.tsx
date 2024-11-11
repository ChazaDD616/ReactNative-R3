import { Tabs } from 'expo-router';
import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const TAB_CONFIG = {
  home: {
    title: 'Inicio',
    iconActive: 'home',
    iconInactive: 'home-outline',
  },
  menu: {
    title: 'Menú',
    iconActive: 'menu',
    iconInactive: 'menu-outline',
  },
} as const;

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = Colors[colorScheme ?? 'light'].tint;

  const screenOptions = {
    tabBarActiveTintColor: activeColor,
    headerShown: false,
    tabBarStyle: { display: 'none' },
  };

  return (
    <AuthProvider>
      <Tabs screenOptions={screenOptions}>
        {Object.entries(TAB_CONFIG).map(([route, config]) => (
          <Tabs.Screen
            key={route}
            name={route}
            options={{
              title: config.title,
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? config.iconActive : config.iconInactive}
                  color={color}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </AuthProvider>
  );
}
