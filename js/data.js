/* =========================================================
   Course content — edit this file to add or change lectures.
   Every page reads from window.COURSE.
   ========================================================= */
window.COURSE = (() => {
  const SITE = 'https://monther-bug.github.io';

  const instructor = {
    name: 'Monther Ibrahim',
    initials: 'MI',
    github: 'https://github.com/Monther-bug',
    githubUser: 'Monther-bug',
  };

  const playlist = 'https://www.youtube.com/playlist?list=PLlvRDpXh1Se5LTJZDrUF9h1_1AT4Raxjd';

  /* Each lecture:
     t/s      title split in two (second part gets the gradient)
     summary  one line for cards
     about    the longer description on the detail page
     goals    what students can do after the lecture
     sections the lecture outline (follows the slides)
     code     code walk-throughs: { title, file, lang, src, notes: [[lines, text], ...] }
     videos   { title, channel, id, len, about }
     practice tasks, mistakes [[error, fix], ...] */
  const lectures = [
    {
      t: 'Introduction to Flutter', s: '& Course Overview', slides: 16,
      url: `${SITE}/flutter-lecture-01-presentation/`,
      summary: 'What Flutter is, why we use it, and how this project-based course works.',
      about: 'The first lecture answers three questions: why do apps need a tool like Flutter, what exactly is Flutter, and why do we use it in this course? Then we look at how the course works: no exams, only projects, and what you will be able to build by the end of the semester.',
      chips: ['Cross-platform', 'Widgets', 'Dart', 'Hot reload', 'Flutter vs React Native', 'Course plan'],
      goals: [
        'Explain why one code for Android and iPhone saves time',
        'Describe Flutter in one sentence: a free toolkit from Google',
        'Know the six words you will hear all semester: widget, Dart, SDK, emulator, hot reload, package',
        'Compare Flutter with native development and React Native',
        'Understand how the course is graded: 4 projects, a midterm and a final',
      ],
      sections: [
        { h: 'One app, two kinds of phones', p: 'Android uses Kotlin and iPhone uses Swift. Building separately means writing the same app twice. Cross-platform tools fix that.' },
        { h: 'What is Flutter?', p: 'You write code in Dart, Flutter builds it into a real app, and it runs on Android, iPhone, web and desktop.' },
        { h: 'Words you will hear all semester', p: 'Widget (the most important one), Dart, SDK, emulator, hot reload and package.' },
        { h: 'Why Flutter?', p: 'One code for many platforms, hot reload, smooth performance, beautiful ready-made designs, a big community and real jobs.' },
        { h: 'Your first look at Flutter code', p: 'A tiny app with MaterialApp, Scaffold, AppBar and Text. You don\'t need to understand it yet.' },
        { h: 'Flutter vs. other tools', p: 'Native, Flutter and React Native compared: language, how much code you write, and how the screen is drawn.' },
        { h: 'Who uses Flutter', p: 'Google Pay, BMW, Toyota, Alibaba, talabat and more, and most Libyan companies that build mobile apps.' },
        { h: 'How the course works', p: 'Learn by building: no exams, only projects. Then the topic list, the class rules and how to get a head start.' },
      ],
      code: [
        {
          title: 'Your first Flutter app', file: 'lib/main.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Hello Flutter')),
        body: const Center(child: Text('Welcome to the course!')),
      ),
    );
  }
}`,
          notes: [
            ['1', '<b>import</b> brings in Flutter\'s ready-made widgets.'],
            ['3', '<b>main()</b> is where the app starts. <b>runApp</b> puts our app on the screen.'],
            ['5', '<b>MyApp</b> is our own widget. In Flutter, everything is a widget.'],
            ['11–14', 'Widgets inside widgets: the app holds a page (Scaffold), the page holds a top bar (AppBar) and a body, the body holds a text.'],
          ],
        },
      ],
      videos: [
        { title: 'What is Flutter?', channel: 'Net Ninja', id: 'j_rCDc_X-k8', len: '6:56', about: 'A clear beginner introduction: what Flutter is, how widgets work and why so many developers choose it.' },
        { title: 'Flutter vs React Native vs Swift/Kotlin in 5 Minutes', channel: 'Your Average Tech Bro', id: '8yImX_v8f-k', len: '5:20', about: 'A quick comparison of the three main ways to build mobile apps, to back up the comparison slide.' },
      ],
      practice: [
        'Install Flutter before the next lecture (optional head start)',
        'Install VS Code and the Flutter extension',
        'Write down 3 apps on your phone and guess if they could be built with Flutter',
      ],
      mistakes: [
        ['"Flutter is a programming language"', 'Flutter is a toolkit. The language is Dart.'],
        ['"I need a Mac to learn Flutter"', 'Windows is enough. You only need a Mac to build iPhone apps.'],
      ],
    },
    {
      t: 'Installing Flutter', s: '& Your First Project', slides: 19,
      url: `${SITE}/flutter-lecture-02/`,
      summary: 'Install Flutter step by step, check it with flutter doctor, and create your first project.',
      about: 'A hands-on lecture: from an empty laptop to a running app. We install Git and VS Code, download the Flutter SDK, add its bin folder to the Windows Path, set up Android Studio and a phone to run on, and check everything with flutter doctor. Mac users get a simple 3-step version. We finish by creating, running and hot-reloading the first project.',
      chips: ['Git & VS Code', 'Flutter SDK', 'PATH', 'Android Studio', 'flutter doctor', 'flutter create', 'Hot reload'],
      goals: [
        'Install Flutter on Windows (or Mac) without help',
        'Add the Flutter bin folder to the Path environment variable',
        'Read flutter doctor and fix what it reports',
        'Run an app on an emulator, your phone or Chrome',
        'Create a project and use hot reload',
      ],
      sections: [
        { h: 'What we install', p: 'Git, VS Code + Flutter extension, the Flutter SDK and Android Studio, plus what your laptop needs.' },
        { h: 'Git and VS Code', p: 'Two normal installers. Add the Flutter extension from the Extensions panel.' },
        { h: 'Download the Flutter SDK', p: 'One zip file from docs.flutter.dev/install/manual.' },
        { h: 'Extract to C:\\develop', p: 'A short path with no spaces and no Arabic letters.' },
        { h: 'Copy the bin path', p: 'Open C:\\develop\\flutter\\bin, click the address bar, Ctrl + C.' },
        { h: 'Add it to Path', p: 'Environment Variables → Path → Edit → New → paste → OK. Then open a new PowerShell.' },
        { h: 'Android Studio and a device', p: 'Standard setup, Command-line Tools, accept the licenses, then an emulator or your own phone.' },
        { h: 'flutter doctor, Mac and AI', p: 'Read the green ticks, the 3 Mac steps, and a prompt that lets an AI agent install Flutter for you.' },
        { h: 'Your first project', p: 'Create it in VS Code or the terminal, look inside, run it, and try hot reload.' },
      ],
      code: [
        {
          title: 'Check your setup', file: 'PowerShell', lang: 'shell',
          src: `flutter --version
flutter doctor
flutter doctor --android-licenses`,
          notes: [
            ['1', 'Shows the Flutter version. If it says "not recognized", the Path step is wrong.'],
            ['2', 'Checks everything. You want ✓ on Flutter, Android toolchain and Connected device.'],
            ['3', 'Accepts the Android licenses. Type <b>y</b> and Enter for each one.'],
          ],
        },
        {
          title: 'Create and run a project', file: 'PowerShell', lang: 'shell',
          src: `flutter create my_first_app
cd my_first_app
flutter run`,
          notes: [
            ['1', '<b>create</b> makes a new project. Names: lowercase letters and underscores only.'],
            ['2', '<b>cd</b> moves into the project folder.'],
            ['3', '<b>run</b> builds the app and starts it. The first run is slow; that\'s normal.'],
          ],
        },
      ],
      videos: [
        { title: 'Installing on Windows', channel: 'Net Ninja', id: 'DvZuJeTHWaw', len: '10:49', about: 'Follow a full Windows install from start to finish. The Flutter website looks a little different today, so use the lecture slides for the exact steps.' },
        { title: 'Making a New Flutter Project', channel: 'Net Ninja', id: 'adNHZVBd284', len: '5:00', about: 'Creating a project and running it for the first time.' },
        { title: 'Installing on a Mac (Mac users only)', channel: 'Net Ninja', id: 'BwKfjzxTGXI', len: '13:07', about: 'The same setup on macOS.' },
      ],
      practice: [
        'flutter doctor shows ✓ for Flutter and the Android toolchain',
        'Create my_first_app and run it',
        'Change the title to your name with hot reload',
        'Send a screenshot of your running app to the class group',
      ],
      mistakes: [
        ['\'flutter\' is not recognized…', 'The Path line must be exactly C:\\develop\\flutter\\bin. Then open a new PowerShell.'],
        ['cmdline-tools component is missing', 'Android Studio → SDK Manager → SDK Tools → tick Command-line Tools.'],
        ['Android license status unknown', 'Run flutter doctor --android-licenses and press y.'],
        ['Emulator very slow', 'Turn on virtualization in the BIOS, or use your own phone.'],
      ],
    },
    {
      t: 'Inside Your First', s: 'Flutter Project', slides: 17,
      url: `${SITE}/flutter-lecture-03/`,
      summary: 'Understand every line of main.dart and the settings file pubspec.yaml.',
      about: 'We open the project from lecture 2, delete the demo code, and write our own app from an empty main.dart, line by line. Along the way we meet pubspec.yaml (the app\'s ID card), import, main() and runApp(), our first StatelessWidget, the build method and MaterialApp, and we draw our first widget tree.',
      chips: ['pubspec.yaml', 'import', 'main()', 'runApp', 'StatelessWidget', 'build()', 'MaterialApp'],
      goals: [
        'Know the two files that matter: lib/main.dart and pubspec.yaml',
        'Write a Flutter app from an empty file',
        'Explain what import, main(), runApp(), StatelessWidget and build() do',
        'Draw the widget tree of a small app',
      ],
      sections: [
        { h: 'Create the project', p: 'VS Code or terminal, with the naming rules.' },
        { h: 'Only two files matter', p: 'lib/main.dart is your code. pubspec.yaml is your app\'s settings.' },
        { h: 'pubspec.yaml', p: 'name, version, dependencies and uses-material-design. Spaces matter!' },
        { h: 'Start from an empty file', p: 'Delete the demo and type the app with the class.' },
        { h: 'Line by line', p: 'import → main() and runApp() → class MyApp → build() → MaterialApp → Center and Text.' },
        { h: 'Stateless vs Stateful', p: 'A printed poster vs a scoreboard. For now, everything we build is stateless.' },
        { h: 'The widget tree', p: 'runApp → MyApp → MaterialApp → Center → Text.' },
        { h: 'Run it', p: 'Red text with yellow lines? Normal for now. Scaffold fixes it next lecture.' },
      ],
      code: [
        {
          title: 'The whole app', file: 'lib/main.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Center(
        child: Text('Hello, Flutter!'),
      ),
    );
  }
}`,
          notes: [
            ['1', '<b>import</b>: open Flutter\'s toolbox. Without it: "Undefined class StatelessWidget".'],
            ['3–5', '<b>main()</b> is the front door. <b>runApp()</b> puts MyApp on the screen.'],
            ['7–8', '<b>class MyApp extends StatelessWidget</b>: our own widget, one that never changes. Shortcut: type <code>stless</code>.'],
            ['10–11', '<b>build()</b>: Flutter asks "what should I draw?" and we <b>return</b> a widget.'],
            ['12–13', '<b>MaterialApp</b> wraps the whole app. <code>debugShowCheckedModeBanner: false</code> hides the DEBUG ribbon.'],
            ['14–16', '<b>home:</b> is the first screen: a Center holding one child, a Text.'],
          ],
        },
        {
          title: 'The settings file', file: 'pubspec.yaml', lang: 'yaml',
          src: `name: my_first_app
version: 1.0.0+1

dependencies:
  flutter:
    sdk: flutter

flutter:
  uses-material-design: true`,
          notes: [
            ['1', 'The app\'s name: lowercase_with_underscores.'],
            ['2', '1.0.0 is the version users see, +1 is the build number.'],
            ['4–6', 'Packages your app uses. Indent with 2 spaces, never Tab.'],
            ['8–9', 'Turns on Material icons and design.'],
          ],
        },
      ],
      videos: [
        { title: 'Quick Project Overview', channel: 'Net Ninja', id: 'qdyt8UO-MqM', len: '4:07', about: 'A tour of the folders and files in a new Flutter project.' },
        { title: 'Stateless Widgets', channel: 'Net Ninja', id: 'tDKgJEvhaP8', len: '6:27', about: 'How a StatelessWidget and its build method work.' },
      ],
      practice: [
        'Delete main.dart and type the app again from memory',
        'Show your name in the middle of the screen',
        'Turn the DEBUG ribbon on, then off',
        'Make the widget with the stless shortcut',
      ],
      mistakes: [
        ['Expected to find \';\'.', 'A line is missing its ; at the end.'],
        ['Undefined class \'StatelessWidget\'.', 'The import line is missing.'],
        ['The method \'text\' isn\'t defined…', 'Capitals matter: Text, not text.'],
        ['Expected to find \')\'.', 'A bracket is missing. Every ( needs a ).'],
      ],
    },
    {
      t: 'Your First', s: 'Widgets', slides: 14,
      url: `${SITE}/flutter-lecture-04/`,
      summary: 'Scaffold, AppBar, Text and Container: the widgets almost every screen uses.',
      about: 'After a quick revision and a click-to-reveal quiz, we fix last lecture\'s red text with Scaffold, add a top bar with AppBar, style words with Text and TextStyle, and make boxes with Container and BoxDecoration. We finish by building a profile card that uses all four.',
      chips: ['Scaffold', 'AppBar', 'Text', 'TextStyle', 'Container', 'BoxDecoration', 'EdgeInsets'],
      goals: [
        'Give every screen a Scaffold with an AppBar and a body',
        'Style text: size, weight, color, alignment',
        'Make a box with size, padding, margin, color and rounded corners',
        'Build a small profile card',
      ],
      sections: [
        { h: 'Revision and quick check', p: 'main.dart in one picture, then four questions.' },
        { h: 'Scaffold', p: 'Fixes the red text and gives the page ready-made places: appBar, body, FAB, bottom bar.' },
        { h: 'AppBar', p: 'title, backgroundColor, foregroundColor, centerTitle.' },
        { h: 'Text', p: 'TextStyle: fontSize, fontWeight, color, fontStyle, letterSpacing, plus textAlign.' },
        { h: 'Container', p: 'A box: width, height, color, padding (inside), margin (outside), child.' },
        { h: 'decoration', p: 'BoxDecoration for rounded corners and borders. Color goes inside it!' },
        { h: 'Build it: a profile card', p: 'All four widgets together, and its widget tree.' },
      ],
      code: [
        {
          title: 'A profile card', file: 'lib/main.dart · inside MaterialApp', lang: 'dart',
          src: `home: Scaffold(
  appBar: AppBar(
    title: const Text('My Profile'),
    backgroundColor: Colors.blue,
    foregroundColor: Colors.white,
  ),
  body: Center(
    child: Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.blue.shade50,
        borderRadius: BorderRadius.circular(16),
      ),
      child: const Text(
        'Ahmed Ali\\nFlutter Student',
        textAlign: TextAlign.center,
        style: TextStyle(fontSize: 22),
      ),
    ),
  ),
),`,
          notes: [
            ['1', '<b>Scaffold</b>: the page. No more red text.'],
            ['2–6', '<b>AppBar</b>: the top bar with a title and our colors.'],
            ['7–8', '<b>Center</b> puts the <b>Container</b> (our box) in the middle.'],
            ['9', '<b>padding</b>: space inside the box, around the text.'],
            ['10–13', '<b>BoxDecoration</b>: the box\'s color and rounded corners.'],
            ['14–18', '<b>Text</b> with <code>\\n</code> for a new line, centered and size 22.'],
          ],
        },
      ],
      videos: [
        { title: 'App Bar · Widget of the Day #10', channel: 'Widget of the Day', id: 'IdyPjhBqXlg', len: '4:36', about: 'Everything about the AppBar: title, colors, leading and actions.' },
        { title: 'Container · Widget of the Day #01', channel: 'Widget of the Day', id: 'X47zIAGIJNE', len: '6:06', about: 'Size, padding, margin and decoration on the most used widget.' },
        { title: 'Text & Styling · Widget of the Day #17', channel: 'Widget of the Day', id: 'NZl5fan36uw', len: '3:06', about: 'How to style text: fonts, sizes, weights and colors.' },
      ],
      practice: [
        'An AppBar with your name as the title',
        'Change the AppBar colors',
        'A Container with rounded corners and your favorite color',
        'A bold Text with your major and university',
        'Bonus: add a border to the box',
      ],
      mistakes: [
        ['Cannot provide both a color and a decoration', 'Move color inside BoxDecoration.'],
        ['Invalid constant value.', 'Remove const before a widget with changing values.'],
        ['Undefined name \'colors\'.', 'Capital C: Colors.blue.'],
        ['Expected to find \',\'.', 'Each property ends with a comma.'],
      ],
    },
    {
      t: 'Layout:', s: 'Column & Row', slides: 14,
      url: `${SITE}/flutter-lecture-05/`,
      summary: 'Put many widgets on the screen, in the right place, with the right space.',
      about: 'Until now every widget had one child. This lecture introduces children: lists of widgets arranged by Column (top to bottom) and Row (left to right). We learn the main and cross axis with live alignment demos, add space with SizedBox and Padding, share space with Expanded, and build a contact card.',
      chips: ['Column', 'Row', 'mainAxisAlignment', 'crossAxisAlignment', 'SizedBox', 'Padding', 'Expanded'],
      goals: [
        'Use children: [ ] to put many widgets on a screen',
        'Tell the main axis from the cross axis in a Column and a Row',
        'Space widgets with SizedBox and Padding',
        'Share free space with Expanded and flex',
      ],
      sections: [
        { h: 'child vs children', p: 'child holds one widget. children: [ ] holds a list.' },
        { h: 'Column and Row', p: 'Top to bottom, and left to right. Same properties for both.' },
        { h: 'Main axis and cross axis', p: 'Main = the direction the widgets flow. Cross = the other direction.' },
        { h: 'mainAxisAlignment', p: 'start, center, end, spaceBetween, spaceAround, spaceEvenly.' },
        { h: 'crossAxisAlignment', p: 'start, center, end, stretch.' },
        { h: 'SizedBox and Padding', p: 'Invisible space between widgets, and space around a widget with EdgeInsets.' },
        { h: 'Expanded', p: 'Take the free space. flex decides who gets more.' },
        { h: 'Build it: a contact card', p: 'Column, Row, Icon, SizedBox and MainAxisSize.min together.' },
      ],
      code: [
        {
          title: 'A contact card', file: 'lib/main.dart · inside Scaffold', lang: 'dart',
          src: `body: Center(
  child: Container(
    padding: const EdgeInsets.all(20),
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(16),
    ),
    child: const Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Ahmed Ali', style: TextStyle(fontSize: 22)),
        Text('Flutter Student'),
        SizedBox(height: 16),
        Row(children: [
          Icon(Icons.phone),
          SizedBox(width: 8),
          Text('091 234 5678'),
        ]),
      ],
    ),
  ),
),`,
          notes: [
            ['8', '<b>Column</b>: the card\'s contents, top to bottom.'],
            ['9', '<b>MainAxisSize.min</b>: the Column is only as tall as its children.'],
            ['10', '<b>CrossAxisAlignment.start</b>: everything lines up on the left.'],
            ['11–14', '<b>children</b>: two texts, then a <b>SizedBox</b> for 16 pixels of space.'],
            ['15–19', 'A <b>Row</b>: icon, small space, phone number, side by side.'],
          ],
        },
        {
          title: 'Expanded shares the space', file: 'lib/main.dart', lang: 'dart',
          src: `Row(
  children: [
    Container(width: 80, color: Colors.grey),
    Expanded(
      flex: 1,
      child: Container(color: Colors.blue),
    ),
  ],
)`,
          notes: [
            ['3', 'A fixed box of 80 pixels.'],
            ['4–7', '<b>Expanded</b> fills everything that\'s left. With two Expanded, <b>flex</b> decides the share.'],
          ],
        },
      ],
      videos: [
        { title: 'Columns & Rows · Widget of the Day #03', channel: 'Widget of the Day', id: '1Iiq4oPCz3k', len: '4:29', about: 'Column and Row with both alignment properties, shown live.' },
        { title: 'Expanded · Widget of the Day #02', channel: 'Widget of the Day', id: 'aHT7HF8sV14', len: '3:31', about: 'How Expanded and flex share space inside a Row or Column.' },
      ],
      practice: [
        'Build the contact card with your name and number',
        'Add a second Row with an email icon',
        'Try all 6 mainAxisAlignment values in a Row',
        'Make a Row of 3 boxes using Expanded with flex 1, 2, 1',
      ],
      mistakes: [
        ['A RenderFlex overflowed by 42 pixels on the right.', 'Too wide for the screen. Wrap the long widget in Expanded.'],
        ['The named parameter \'child\' isn\'t defined.', 'Column and Row use children: [ ], not child:.'],
        ['Incorrect use of ParentDataWidget.', 'Expanded must be directly inside a Row or Column.'],
      ],
    },
    {
      t: 'Icons, Images', s: '& Assets', slides: 13,
      url: `${SITE}/flutter-lecture-06/`,
      summary: 'Icons, pictures from the internet, and your own pictures in the app.',
      about: 'Pictures make an app feel real. We use Material icons, show photos from the internet with Image.network, add our own pictures as assets in three steps (folder, pubspec.yaml, Image.asset), control how they fill their box with BoxFit, make them round with CircleAvatar and ClipRRect, and try our first package: flutter_svg.',
      chips: ['Icon', 'Image.network', 'Assets', 'pubspec.yaml', 'BoxFit', 'CircleAvatar', 'ClipRRect', 'SVG'],
      goals: [
        'Find and use any Material icon',
        'Show a picture from the internet',
        'Add your own pictures as assets in 3 steps',
        'Make round photos and rounded corners',
        'Add a package with flutter pub add',
      ],
      sections: [
        { h: 'Icon', p: 'Thousands of free symbols with a color and a size. Find names at fonts.google.com/icons.' },
        { h: 'Image.network', p: 'A picture from a URL. Needs internet.' },
        { h: 'Assets: 3 steps', p: 'Make the assets/images folder, list it in pubspec.yaml, then use Image.asset.' },
        { h: 'BoxFit', p: 'cover, contain and fill: how a picture fills its box.' },
        { h: 'Round images', p: 'CircleAvatar for profile photos, ClipRRect for rounded corners.' },
        { h: 'Build it: a profile header', p: 'Your photo, your name and three icons.' },
        { h: 'Bonus: SVG', p: 'Our first package, flutter_svg, for sharp images at any size.' },
      ],
      code: [
        {
          title: 'Step 2 · list your assets', file: 'pubspec.yaml', lang: 'yaml',
          src: `flutter:
  uses-material-design: true
  assets:
    - assets/images/`,
          notes: [
            ['3', '<b>assets:</b> has 2 spaces in front.'],
            ['4', '<b>- assets/images/</b> has 4 spaces and ends with <b>/</b>. It includes every picture in the folder.'],
          ],
        },
        {
          title: 'A profile header', file: 'lib/main.dart · inside Scaffold', lang: 'dart',
          src: `body: const Padding(
  padding: EdgeInsets.all(24),
  child: Column(
    children: [
      CircleAvatar(
        radius: 50,
        backgroundImage: AssetImage('assets/images/me.jpg'),
      ),
      SizedBox(height: 12),
      Text('Ahmed Ali', style: TextStyle(fontSize: 22)),
      SizedBox(height: 12),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.phone, color: Colors.blue),
          SizedBox(width: 24),
          Icon(Icons.email, color: Colors.blue),
        ],
      ),
    ],
  ),
),`,
          notes: [
            ['5–8', '<b>CircleAvatar</b> with <b>AssetImage</b>: your photo in a circle. The path must match the file exactly.'],
            ['10', 'Your name under the photo.'],
            ['12–19', 'A centered <b>Row</b> of icons with space between them.'],
          ],
        },
      ],
      videos: [
        { title: 'Image Asset · Widget of the Day #06', channel: 'Widget of the Day', id: '6TmpjwKX9AU', len: '4:31', about: 'Adding pictures to the project and showing them with Image.asset.' },
        { title: 'Round Corners · Widget of the Day #05', channel: 'Widget of the Day', id: 'yxYntGhRzGM', len: '2:46', about: 'Rounded corners on boxes and pictures.' },
      ],
      practice: [
        'Put your photo in a CircleAvatar',
        'Add your name and 3 icons under it',
        'Show a network picture with rounded corners',
        'Try BoxFit.cover, contain and fill',
      ],
      mistakes: [
        ['Unable to load asset: "assets/images/me.jpg"', 'Check the path and name, and that the folder is in pubspec.yaml.'],
        ['New picture doesn\'t show up', 'Stop the app and run it again. New assets need a full restart.'],
        ['Error on line 12 … pubspec.yaml', 'Wrong spaces in pubspec.yaml. Use 2 and 4 spaces, never Tab.'],
        ['SocketException: Failed host lookup', 'No internet, or a wrong URL in Image.network.'],
      ],
    },
    {
      t: 'User Input:', s: 'TextField & Buttons', slides: 14,
      url: `${SITE}/flutter-lecture-07/`,
      summary: 'Let the user type and tap: text fields, passwords, keyboards and buttons.',
      about: 'Our apps start talking back. We add TextField and style it with InputDecoration (label, hint, icon, border), hide passwords, choose the right keyboard, read what the user types with onChanged, learn the idea of "when this happens, run this code", and meet the four Material buttons. We build a mini login form.',
      chips: ['TextField', 'InputDecoration', 'obscureText', 'keyboardType', 'onChanged', 'ElevatedButton', 'TextButton', 'IconButton'],
      goals: [
        'Add a styled TextField with a label, icon and border',
        'Hide a password and pick the right keyboard',
        'Print what the user types with onChanged',
        'Choose the right button: Elevated, Outlined, Text or Icon',
        'Make a full-width button',
      ],
      sections: [
        { h: 'TextField', p: 'A box the user types in. It must be inside a Scaffold.' },
        { h: 'InputDecoration', p: 'labelText, hintText, prefixIcon, border; and three looks: default, outlined, filled.' },
        { h: 'Passwords and keyboards', p: 'obscureText: true, and keyboardType for email, number and phone.' },
        { h: 'Reading the input', p: 'onChanged gives you the text every time it changes. print shows it in the Debug Console.' },
        { h: '"When this happens, run this"', p: 'Functions you give to widgets: (value) { … } and () { … }.' },
        { h: 'Four buttons', p: 'ElevatedButton, OutlinedButton, TextButton and IconButton, and when to use each.' },
        { h: 'Build it: a mini login form', p: 'Two fields and a full-width button.' },
      ],
      code: [
        {
          title: 'Reading what the user types', file: 'lib/main.dart', lang: 'dart',
          src: `TextField(
  decoration: InputDecoration(labelText: 'Name'),
  onChanged: (value) {
    print(value);
  },
)`,
          notes: [
            ['2', 'A label that floats up when you tap the field.'],
            ['3', '<b>onChanged</b> runs every time the text changes. <b>value</b> is the text right now.'],
            ['4', '<b>print</b> shows it in VS Code\'s Debug Console.'],
          ],
        },
        {
          title: 'A mini login form', file: 'lib/main.dart · inside Scaffold', lang: 'dart',
          src: `body: Padding(
  padding: const EdgeInsets.all(24),
  child: Column(
    children: [
      const TextField(
        decoration: InputDecoration(labelText: 'Email', border: OutlineInputBorder()),
      ),
      const SizedBox(height: 16),
      const TextField(
        obscureText: true,
        decoration: InputDecoration(labelText: 'Password', border: OutlineInputBorder()),
      ),
      const SizedBox(height: 24),
      SizedBox(
        width: double.infinity,
        child: ElevatedButton(
          onPressed: () {
            print('Login pressed');
          },
          child: const Text('Login'),
        ),
      ),
    ],
  ),
),`,
          notes: [
            ['5–7', 'An outlined <b>email</b> field.'],
            ['9–12', 'A <b>password</b> field: <code>obscureText: true</code> hides the letters.'],
            ['14–15', '<b>SizedBox(width: double.infinity)</b> makes the button full width.'],
            ['17–19', '<b>onPressed</b>: what happens on tap. <code>null</code> would disable the button.'],
          ],
        },
      ],
      videos: [
        { title: 'User Input · Widget of the Day #22', channel: 'Widget of the Day', id: 'LFQgZc4oKa4', len: '5:33', about: 'Getting text from the keyboard with a TextField.' },
        { title: 'The New Buttons (Elevated, Text, Outlined)', channel: 'Flutter Mentor', id: 'UYI4cF1BYs4', len: '6:58', about: 'The differences between the main Material buttons.' },
      ],
      practice: [
        'Build the mini login form',
        'Add icons to both fields with prefixIcon',
        'Print the email every time it changes',
        'Add a "Forgot password?" TextButton under the button',
      ],
      mistakes: [
        ['No Material widget found.', 'Put the TextField inside a Scaffold.'],
        ['An InputDecorator … cannot have an unbounded width.', 'A TextField in a Row needs Expanded around it.'],
        ['Bottom overflowed by 120 pixels.', 'The keyboard covers the screen. SingleChildScrollView fixes it (lecture 8).'],
        ['The button is grey and doesn\'t work', 'onPressed is null. Give it a function: () { }.'],
      ],
    },
    {
      t: 'Build a', s: 'Login Page', slides: 13,
      url: `${SITE}/flutter-lecture-08/`,
      summary: 'Everything so far in one real screen, built step by step. Project 2 starts here.',
      about: 'Real developers don\'t start typing straight away: they look at the design, plan the widget tree, then build in small steps. We do exactly that for a complete login page: a skeleton with SafeArea and SingleChildScrollView, a logo and title, two fields, "Forgot password?" and a full-width button, a sign-up row, and a SnackBar message. We end with a quality checklist and the Project 2 brief.',
      chips: ['Planning a screen', 'SafeArea', 'SingleChildScrollView', 'Align', 'SnackBar', 'GestureDetector'],
      goals: [
        'Turn a design into a widget tree before coding',
        'Build a complete login page in 5 small steps',
        'Keep a page working when the keyboard opens',
        'Show a SnackBar message and make any widget tappable',
        'Check a screen before calling it "done"',
      ],
      sections: [
        { h: 'Look and plan', p: 'Study the design, then draw the widget tree: Scaffold → SafeArea → SingleChildScrollView → Column.' },
        { h: 'Step 1 · the skeleton', p: 'SafeArea avoids the notch, SingleChildScrollView scrolls with the keyboard, stretch makes everything full width.' },
        { h: 'Step 2 · logo and title', p: 'FlutterLogo (or your Image.asset), a title and a subtitle.' },
        { h: 'Step 3 · the fields', p: 'Email and password with icons and the right keyboard.' },
        { h: 'Step 4 · the buttons', p: '"Forgot password?" on the right with Align, and a tall Login button.' },
        { h: 'Step 5 · the sign-up row', p: 'A centered Row of Text and TextButton. Mind the apostrophe!' },
        { h: 'React to the user', p: 'SnackBar messages and GestureDetector for anything tappable.' },
        { h: 'Quality check and Project 2', p: 'It works, it looks good, then your turn.' },
      ],
      code: [
        {
          title: 'Step 1 · the skeleton', file: 'lib/main.dart · LoginPage build()', lang: 'dart',
          src: `return Scaffold(
  body: SafeArea(
    child: SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // our widgets go here
        ],
      ),
    ),
  ),
);`,
          notes: [
            ['2', '<b>SafeArea</b> keeps content away from the notch and status bar.'],
            ['3–4', '<b>SingleChildScrollView</b> lets the page scroll, so the keyboard never causes an overflow.'],
            ['6', '<b>stretch</b> makes every child full width, buttons and fields included.'],
            ['8', 'Lines starting with <code>//</code> are comments. Dart ignores them.'],
          ],
        },
        {
          title: 'The Login button with a SnackBar', file: 'inside children: [ ]', lang: 'dart',
          src: `SizedBox(
  height: 50,
  child: ElevatedButton(
    onPressed: () {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Logging in…')),
      );
    },
    child: const Text('Login'),
  ),
),`,
          notes: [
            ['1–2', 'A tall, easy-to-tap button. Full width comes from the Column\'s stretch.'],
            ['5–7', 'Shows a short message at the bottom for a few seconds. <code>context</code> comes from build().'],
          ],
        },
      ],
      videos: [
        { title: 'Gesture Detector · Widget of the Day #08', channel: 'Widget of the Day', id: 'iTrqA8Ec0gQ', len: '5:45', about: 'Make any widget react to taps, double taps and long presses.' },
        { title: 'Alert Dialog · Widget of the Day #16 (bonus)', channel: 'Widget of the Day', id: '3G497C9uy0M', len: '3:02', about: 'Show a pop-up dialog, for example for "Forgot password?".' },
      ],
      practice: [
        'Build the login page step by step',
        'Make it your own design: colors, logo and text',
        'Open the keyboard: no overflow',
        'Start Project 2',
      ],
      mistakes: [
        ['Bottom overflowed by … pixels', 'Wrap the Column in SingleChildScrollView.'],
        ['The TextButton stretches full width', 'Wrap it in Align(alignment: Alignment.centerRight).'],
        ['Error with "Don\'t have an account?"', 'The text has an apostrophe, so use double quotes.'],
      ],
    },
  ];

  const grades = [
    { name: 'Project 1', what: 'Profile Card', marks: 5, color: '#13B9FD' },
    { name: 'Project 2', what: 'Login Page', marks: 8, color: '#0EA5E9' },
    { name: 'Project 3', what: '', marks: 10, color: '#0175C2' },
    { name: 'Project 4', what: '', marks: 12, color: '#02569B' },
    { name: 'Midterm', what: '', marks: 25, color: '#0F766E' },
    { name: 'Final', what: '', marks: 40, color: '#0B2545' },
  ];

  return { SITE, instructor, playlist, lectures, grades };
})();
