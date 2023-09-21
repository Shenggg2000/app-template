#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <CodePush/CodePush.h>
#import "RNCConfig.h"
#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenter/MSACAppCenter.h>
#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>
#import <Firebase.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"template";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  NSString *appSecret = [RNCConfig envFor:@"CODE_PUSH_SECRET_IOS"];
  [AppCenterReactNativeShared setStartAutomatically:YES];
  [AppCenterReactNativeShared setAppSecret: appSecret];
  [AppCenterReactNative register];
  [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
  [AppCenterReactNativeCrashes registerWithAutomaticProcessing];
  [FIRApp configure];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
#endif
}

@end
