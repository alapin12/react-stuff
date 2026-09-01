import { colors } from '@/styles/global';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='add-meal'
        options={{
          title: 'Add Meal',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='add-circle' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='meals'
        options={{
          title: 'All Meals',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="profile" 
        options={{title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='tag-faces' size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen 
        name="shop" 
        options={{ 
            title: "Shop",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='shop' size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
    
  );
}
