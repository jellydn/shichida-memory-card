# Welcome to Shichida Memory Card 👋

![Version 1.0.0](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

Shichida Memory Card is a dynamic and interactive app designed to enhance memory skills. Built with modern JavaScript technologies, it offers a seamless user experience across various platforms.

## Tech Stack

This project is built using the following technologies:

- **Expo**: Create universal native apps with React that run on Android, iOS, and the web. Iterate with confidence. [Expo Documentation](https://docs.expo.dev/guides/overview/)
- **Expo Router**: Expo Router is an open-source routing library for Universal React Native applications built with Expo. [Introduction to Expo Router](https://docs.expo.dev/router/introduction/)
- **React Native Reanimated**: Provides a more fluid user interface for React Native apps. [Getting Started Guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)
- **React Native Swiper**: The best Swiper component for React Native. [More details](https://github.com/leecade/react-native-swiper)
- **Gluestack-ui**: Universal Themed & Unstyled Components for React Native, Next.js, Expo & React. [Introduction](https://gluestack.io/ui/docs/overview/introduction)
- **Biome**: A modern JavaScript toolchain that is fast and reliable. [Biome Getting Started](https://biomejs.dev/guides/getting-started/)
- **Bun**: A fast all-in-one JavaScript runtime. [Official Bun Site](https://bun.sh/)

## Installation and Usage

To set up the project, run:

```sh
bun install
```

To start the application, execute:

```sh
bun run start
```

## EAS 

### Setup
```sh
eas init
```

### Build
```sh
eas build --profile development-simulator --platform ios
eas build --profile development-simulator --platform android
```

## Troubleshooting

**Issue**: Can't open iOS simulator.

**Solution**:

```sh
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

## Roadmap

- [ ] Add settings screen
- [ ] Add music & sound effects

## References

- [Expo SDK 50 beta is now available - Expo Changelog](https://expo.dev/changelog/2023/12-12-sdk-50-beta)
- [Building splash screens in React Native - LogRocket Blog](https://blog.logrocket.com/building-splash-screens-react-native/)
- [Expo Go for iOS - TestFlight](https://testflight.apple.com/join/GZJxxfUU)

## Support

If this project has been helpful to you, please give it a ⭐ as a token of appreciation!
