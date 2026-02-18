export const ENV = {
  // API Configuration
  API_URL: __DEV__ 
    ? 'http://10.0.2.2:3000/api/v1'  // Android emulator
    // ? 'http://localhost:3000/api/v1'  // iOS simulator
    : 'https://api.address.mr/api/v1',  // Production
  
  // Map Configuration
  MAPBOX_TOKEN: 'pk.your-mapbox-token-here',
  
  // App Configuration
  APP_NAME: 'MarTech Delivery',
  VERSION: '1.0.0',
  
  // Feature Flags
  ENABLE_BIOMETRIC: true,
  ENABLE_OFFLINE: true,
  ENABLE_PUSH_NOTIFICATIONS: true,
};