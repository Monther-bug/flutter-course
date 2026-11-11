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
      t: 'Images, Assets', s: '& SVG', slides: 15,
      url: `${SITE}/flutter-lecture-06/`,
      summary: 'Pictures from the internet, pictures inside your app, and sharp SVG drawings.',
      about: 'Pictures make an app feel real, and today every picture is Chrollo from Hunter x Hunter. We show a picture from the internet with Image.network, add our own pictures as assets in three steps (folder, pubspec.yaml, Image.asset) and choose how they fill their box with BoxFit. Then we learn what an SVG is, add our first package (flutter_svg), show the Phantom Troupe spider with SvgPicture, paint it any color, and build a Chrollo character card.',
      chips: ['Image.network', 'Assets', 'Image.asset', 'pubspec.yaml', 'BoxFit', 'SVG', 'flutter_svg', 'SvgPicture'],
      goals: [
        'Show a picture from the internet',
        'Add your own pictures as assets in 3 steps',
        'Choose how a picture fills its box with BoxFit',
        'Explain the difference between pixels (JPG, PNG) and SVG',
        'Add a package with flutter pub add',
        'Show an SVG with SvgPicture and paint it any color',
      ],
      sections: [
        { h: 'Image.network', p: 'A picture from a URL. Needs internet.' },
        { h: 'Assets: 3 steps', p: 'Make the assets/images folder, list it in pubspec.yaml, then use Image.asset.' },
        { h: 'BoxFit', p: 'cover, contain and fill: how a picture fills its box.' },
        { h: 'What is an SVG?', p: 'JPG and PNG are made of pixels. An SVG is shapes saved as text, so it stays sharp at any size.' },
        { h: 'Our first package: flutter_svg', p: 'flutter pub add flutter_svg, then see the new line in pubspec.yaml.' },
        { h: 'SVG in your assets', p: 'An assets/svg folder, one more line in pubspec.yaml, then import the package and use SvgPicture.asset.' },
        { h: 'Two SVG tricks', p: 'SvgPicture.network for an SVG on the internet, and colorFilter to paint it any color.' },
        { h: 'Build it: a Chrollo card', p: 'The spider SVG, his name, a network picture and three asset pictures in a Row.' },
      ],
      code: [
        {
          title: 'pubspec.yaml · the package and the asset folders', file: 'pubspec.yaml', lang: 'yaml',
          src: `dependencies:
  flutter:
    sdk: flutter
  flutter_svg: ^2.3.0

flutter:
  uses-material-design: true
  assets:
    - assets/images/
    - assets/svg/`,
          notes: [
            ['4', '<b>flutter_svg</b> is added here for you when you run <b>flutter pub add flutter_svg</b>.'],
            ['8', '<b>assets:</b> has 2 spaces in front.'],
            ['9–10', 'One line per folder: 4 spaces, a dash, and a <b>/</b> at the end. Every file in the folder is included.'],
          ],
        },
        {
          title: 'A Chrollo character card', file: 'lib/main.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Phantom Troupe')),
        body: Column(
          children: [
            SvgPicture.asset('assets/svg/phantom_spider.svg', width: 60),
            const Text('Chrollo Lucilfer', style: TextStyle(fontSize: 24)),
            Image.network(
              'https://cdn.myanimelist.net/images/characters/5/186355.jpg',
              height: 220,
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(child: Image.asset('assets/images/chrollo_book.jpg')),
                Expanded(child: Image.asset('assets/images/chrollo_portrait.jpg')),
                Expanded(child: Image.asset('assets/images/chrollo_battle.jpg')),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`,
          notes: [
            ['2', 'Import <b>flutter_svg</b> so this file can use <b>SvgPicture</b>.'],
            ['18', '<b>SvgPicture.asset</b> shows the Phantom Troupe spider from assets/svg.'],
            ['20–23', '<b>Image.network</b> downloads Chrollo from the internet.'],
            ['25–31', 'A <b>Row</b> of three <b>Expanded</b> asset pictures: each one takes a third of the width.'],
          ],
        },
        {
          title: 'Paint an SVG any color', file: 'lib/main.dart', lang: 'dart',
          src: `SvgPicture.asset(
  'assets/svg/phantom_spider.svg',
  width: 80,
  colorFilter: const ColorFilter.mode(Colors.deepPurple, BlendMode.srcIn),
)`,
          notes: [
            ['4', '<b>colorFilter</b> paints the whole drawing in one color. <b>BlendMode.srcIn</b> keeps the shape and changes the color.'],
          ],
        },
      ],
      videos: [
        { title: 'Image Asset · Widget of the Day #06', channel: 'Widget of the Day', id: '6TmpjwKX9AU', len: '4:31', about: 'Adding pictures to the project and showing them with Image.asset.' },
        { title: 'Display SVG Images in Flutter | Step-by-Step Guide', channel: 'Manoj Kulkarni', id: '1ujNbxNbZEc', len: '4:46', about: 'Adding the flutter_svg package and showing an SVG file, step by step.' },
        { title: 'How to load SVG File in Flutter App? (Android & IOS)', channel: 'Flutter Cool', id: 'mTE5QR97jtc', len: '2:31', about: 'A short walkthrough of loading an SVG file with flutter_svg.' },
      ],
      practice: [
        'Show Chrollo from the internet with Image.network',
        'Add the 3 Chrollo pictures as assets and show them',
        'Try BoxFit.cover, contain and fill',
        'Install flutter_svg and show the spider',
        'Paint the spider your favorite color with colorFilter',
      ],
      mistakes: [
        ['Unable to load asset: "assets/images/chrollo_book.jpg"', 'Check the path and name, and that the folder is in pubspec.yaml.'],
        ['New picture doesn\'t show up', 'Stop the app and run it again. New assets need a full restart.'],
        ['Error on line 64 … pubspec.yaml', 'Wrong spaces in pubspec.yaml. Use 2 and 4 spaces, never Tab.'],
        ['Undefined name \'SvgPicture\'', 'Add import \'package:flutter_svg/flutter_svg.dart\'; at the top.'],
        ['Exception: Invalid image data', 'You used Image.asset on an .svg file. Use SvgPicture.asset.'],
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
      t: 'Build Your Own', s: 'Custom Widgets', slides: 16,
      url: `${SITE}/flutter-lecture-08/`,
      summary: 'Make your own TextField and Button once, reuse them everywhere, and build a login page with less code.',
      about: 'We build a login page, and when we catch ourselves copying the same TextField, we make our own widget instead. AppTextField gets its data from parameters (final, required and a default value), AppButton takes a function with VoidCallback, and each one lives in its own file. Two fields drop from 16 lines to 7, and a Sign up form from 32 lines to 11. Along the way: SafeArea, SingleChildScrollView so the keyboard never causes an overflow, Align and a SnackBar message.',
      chips: ['Custom widgets', 'Parameters', 'required', 'Default values', 'VoidCallback', 'SafeArea', 'SingleChildScrollView', 'SnackBar'],
      goals: [
        'Spot repeated code and turn it into your own widget',
        'Build an AppTextField with final fields, required parameters and a default value',
        'Build an AppButton that runs any function with VoidCallback',
        'Put each widget in its own file and import it',
        'Build a login page that still works when the keyboard opens',
        'Reuse the same widgets on a new page in far fewer lines',
      ],
      sections: [
        { h: 'Plan the login page', p: 'Logo, title, two fields, "Forgot password?", a Login button and a sign-up row. The fields and the button will be our own widgets.' },
        { h: 'The skeleton', p: 'SafeArea avoids the notch, SingleChildScrollView scrolls with the keyboard, stretch makes everything full width.' },
        { h: 'The problem', p: 'Two TextFields take 16 lines, and only the label, the icon and hiding the text change.' },
        { h: 'A custom widget is a class', p: 'You already wrote two: MyApp and LoginPage. The class is the cookie cutter, each use is a cookie.' },
        { h: 'Extract and add parameters', p: 'Move the TextField into AppTextField, then give it label, icon and isPassword: the constructor asks, the fields keep, build() uses.' },
        { h: 'Reuse it', p: 'The two fields drop from 16 lines to 7. Change the border once and every field updates.' },
        { h: 'AppButton and files', p: 'A VoidCallback lets AppButton run your code. Each widget goes in its own file under lib/widgets/.' },
        { h: 'Build it, then reuse it again', p: 'Finish the login page with Align, AppButton and a SnackBar, then build a Sign up form in 11 lines instead of 32.' },
      ],
      code: [
        {
          title: 'AppTextField: our own TextField', file: 'lib/widgets/app_text_field.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';

class AppTextField extends StatelessWidget {
  const AppTextField({
    super.key,
    required this.label,
    required this.icon,
    this.isPassword = false,
  });

  final String label;
  final IconData icon;
  final bool isPassword;

  @override
  Widget build(BuildContext context) {
    return TextField(
      obscureText: isPassword,
      decoration: InputDecoration(
        labelText: label,
        prefixIcon: Icon(icon),
        border: const OutlineInputBorder(),
      ),
    );
  }
}`,
          notes: [
            ['1', 'Every widget file starts with this import. In <code>main.dart</code> add <code>import \'widgets/app_text_field.dart\';</code>'],
            ['4–7', 'The <b>constructor</b> asks for the data. <code>required</code> = you must give it. <code>this.label</code> saves it in the field.'],
            ['8', 'A <b>default value</b>: leave <code>isPassword</code> out and the text stays visible.'],
            ['11–13', 'The <b>fields</b> keep the data. <code>final</code> = set once, never changes. <code>IconData</code> is the type of <code>Icons.email</code>.'],
            ['18–21', '<b>build()</b> uses the data. Use it: <code>AppTextField(label: \'Email\', icon: Icons.email)</code>'],
          ],
        },
        {
          title: 'AppButton: pass a function', file: 'lib/widgets/app_button.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';

class AppButton extends StatelessWidget {
  const AppButton({
    super.key,
    required this.text,
    required this.onPressed,
  });

  final String text;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 50,
      child: ElevatedButton(
        onPressed: onPressed,
        child: Text(text),
      ),
    );
  }
}`,
          notes: [
            ['11', '<b>VoidCallback</b> is the type of a function like <code>() { }</code>: no inputs, gives nothing back.'],
            ['15–16', 'A tall, easy-to-tap button that looks the same everywhere you use it.'],
            ['18', 'The button runs <b>your</b> function. Use it: <code>AppButton(text: \'Login\', onPressed: () { })</code>'],
          ],
        },
      ],
      videos: [
        { title: 'How to Create Stateless Widgets · Flutter Widgets 101', channel: 'Google for Developers', id: 'wE7khGHVkYY', len: '6:58', about: 'What a widget is and how to build your own StatelessWidget, from the Flutter team.' },
        { title: 'Alert Dialog · Widget of the Day #16 (bonus)', channel: 'Widget of the Day', id: '3G497C9uy0M', len: '3:02', about: 'Show a pop-up dialog, for example for "Forgot password?".' },
      ],
      practice: [
        'Build the login page with AppTextField and AppButton',
        'Open the keyboard: no overflow',
        'Add a keyboardType parameter to AppTextField',
        'Move your widgets into lib/widgets/ and import them',
        'Build a Sign up page with the same widgets',
      ],
      mistakes: [
        ['The named parameter \'label\' is required, but there\'s no corresponding argument.', 'You forgot a value. Give it: AppTextField(label: \'…\', icon: …).'],
        ['Too many positional arguments: 0 expected, but 2 found.', 'Write the names: label: \'Email\', not just \'Email\'.'],
        ['The method \'AppTextField\' isn\'t defined …', 'Import the file: import \'widgets/app_text_field.dart\';'],
        ['Can\'t define a const constructor for a class with non-final fields.', 'Make every field final.'],
        ['Bottom overflowed by … pixels', 'Wrap the Column in SingleChildScrollView.'],
        ['Error with "Don\'t have an account?"', 'The text has an apostrophe, so use double quotes.'],
      ],
    },
    {
      t: 'Stateful & Stateless Widgets', s: '+ Navigation', slides: 20,
      url: `${SITE}/flutter-lecture-09/`,
      summary: 'When a widget needs to remember data, how setState updates the screen, and moving between pages with Navigator.push and pop.',
      about: 'Until now every widget only showed what it was given. Today some widgets start to remember. We compare stateless and stateful widgets, change the screen with setState() in a counter and a like button, and break it on purpose to see why setState is needed. Then we move between screens: Navigator.push puts a new page on top, Navigator.pop takes it off. We finish by turning the Lecture 8 login page into a real flow: Login opens a Home page that shows the email you typed, and Logout goes back.',
      chips: ['StatelessWidget', 'StatefulWidget', 'State', 'setState', 'Navigator.push', 'Navigator.pop', 'MaterialPageRoute', 'Passing data'],
      goals: [
        'Choose between a StatelessWidget and a StatefulWidget',
        'Write a StatefulWidget with its two classes and createState()',
        'Change the screen with setState(): a counter and a like button',
        'Explain why the screen doesn\'t change without setState',
        'Open a new screen with Navigator.push and go back with Navigator.pop',
        'Pass data to a new screen through its constructor',
      ],
      sections: [
        { h: 'Two kinds of widgets', p: 'Stateless widgets only show what they are given. Stateful widgets remember data that changes, like a counter or a like button.' },
        { h: 'How each one works', p: 'A StatelessWidget keeps final data. A StatefulWidget has two classes: the widget, and its State that remembers. createState() connects them.' },
        { h: 'setState(): the counter', p: 'Change the data inside setState and Flutter runs build() again, so the number on the screen goes up.' },
        { h: 'Without setState', p: 'The Debug Console counts 1, 2, 3 but the screen stays at 0. Then a like button that flips between true and false.' },
        { h: 'Screens on a stack', p: 'Each screen is a plate. Navigator.push puts a new plate on top, Navigator.pop takes it off.' },
        { h: 'push, pop and the back arrow', p: 'MaterialPageRoute wraps the new page. The AppBar adds a back arrow by itself.' },
        { h: 'Build it: Login → Home', p: 'AppTextField gets onChanged, LoginPage remembers the email with setState, Login opens a Home page that shows it, and Logout goes back.' },
      ],
      code: [
        {
          title: 'A counter with setState', file: 'lib/warmup/counter_page.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';

class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Counter')),
      body: Center(child: Text('$count', style: const TextStyle(fontSize: 64))),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            count++;
          });
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}`,
          notes: [
            ['3–8', '<b>Class 1, the widget</b>: a <code>StatefulWidget</code>. <b>createState()</b> makes its State. Shortcut: type <code>stful</code>.'],
            ['10–11', '<b>Class 2, the State</b>: it remembers. <code>count</code> lives here, above <code>build()</code>, so it is not reset.'],
            ['17', 'The screen shows the number right now. <code>\'$count\'</code> turns it into text.'],
            ['20–22', '<b>setState()</b>: change the data inside it and Flutter runs <code>build()</code> again. Without it the screen stays at 0.'],
          ],
        },
        {
          title: 'Login opens the Home page', file: 'lib/login_page.dart · inside the Column', lang: 'dart',
          src: `AppButton(
  text: 'Login',
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => HomePage(email: email),
      ),
    );
  },
),`,
          notes: [
            ['4', '<b>Navigator.push</b> puts a new screen on top of the stack. The back arrow appears by itself.'],
            ['6', '<b>MaterialPageRoute</b> wraps the page: push needs a route, not a page.'],
            ['7', 'Pass the data through the constructor. <code>HomePage</code> has <code>required this.email</code>, and its Logout button calls <code>Navigator.pop(context)</code>.'],
          ],
        },
      ],
      videos: [
        { title: 'How Stateful Widgets Are Used Best · Flutter Widgets 101', channel: 'Google for Developers', id: 'AqCMFXEmf3w', len: '7:09', about: 'The Flutter team explains StatefulWidget, its State class and setState.' },
        { title: 'Navigation & Routes', channel: 'Mitch Koko', id: 'C6nTXjQFVKI', len: '2:34', about: 'A quick look at moving between pages with Navigator.' },
        { title: 'How To Navigate to New Screen and Back', channel: 'HeyFlutter', id: 'yuGaEsLRB38', len: '6:24', about: 'Navigator.push to open a screen and Navigator.pop to go back, step by step.' },
      ],
      practice: [
        'Add a refresh button to the counter that sets it back to 0',
        'Show a like count next to the heart: 0 → 1 → 0',
        'Show a SnackBar when Login is tapped with an empty email',
        'Make "Sign up" open your Sign up page with a back arrow',
        'Add a Profile page: Login → Home → Profile, and back one page at a time',
        'Bonus: an eye icon that shows and hides the password',
      ],
      mistakes: [
        ['The method \'setState\' isn\'t defined for the type \'CounterPage\'.', 'You are in a StatelessWidget. Click the class name, Ctrl + . → Convert to StatefulWidget.'],
        ['The Debug Console shows the new value, but the screen doesn\'t change', 'Change the value inside setState(() { … }).'],
        ['The counter always shows 0, even with setState', 'int count = 0; is inside build(). Move it above build(), into the State class.'],
        ['The named parameter \'email\' is required, but there\'s no corresponding argument.', 'Give HomePage its data: HomePage(email: email).'],
        ['The argument type \'HomePage\' can\'t be assigned to the parameter type \'Route<Object?>\'.', 'push needs a route: MaterialPageRoute(builder: (context) => HomePage(email: email)).'],
        ['Black screen after tapping a button that pops', 'You popped the first screen. Only pop a screen that was pushed.'],
      ],
    },
    {
      t: 'Dark Theme', s: '& Theme Management', slides: 16,
      url: `${SITE}/flutter-lecture-10/`,
      summary: 'Put all colors and styles in one theme, give the app a light and a dark look, and switch between them.',
      about: 'We stop writing colors on every widget. All colors and styles move into one theme file, built from a single seed color with ColorScheme.fromSeed. MaterialApp gets a light theme, a dark theme and a themeMode, every button and text field is styled once, and widgets read their colors with Theme.of(context). Then MyApp remembers the mode with setState, and a moon / sun button on the Lecture 9 login and home pages switches between light and dark.',
      chips: ['ThemeData', 'ColorScheme.fromSeed', 'Brightness', 'darkTheme', 'ThemeMode', 'Theme.of(context)', 'Component themes', 'Light / dark switch'],
      goals: [
        'Explain what a theme is and why colors live in one place',
        'Make a light and a dark theme from one seed color',
        'Use theme, darkTheme and themeMode in MaterialApp',
        'Style every button and text field from the theme',
        'Read colors and text styles with Theme.of(context), with no hard-coded colors',
        'Switch between light and dark with a button',
      ],
      sections: [
        { h: 'Themes and dark mode', p: 'A theme is the app\'s style guide: colors, text and shapes in one place. Dark mode is the same app with dark colors.' },
        { h: 'ThemeData and ColorScheme.fromSeed', p: 'Choose one seed color and Flutter makes all the others. brightness decides light or dark.' },
        { h: 'theme, darkTheme and themeMode', p: 'MaterialApp gets a light look and a dark look. ThemeMode.system follows the phone; .light and .dark choose one.' },
        { h: 'One theme file', p: 'lib/theme/app_theme.dart holds the seed color and buildTheme(), and styles every ElevatedButton and TextField at once.' },
        { h: 'Read the theme in a widget', p: 'Theme.of(context).colorScheme and .textTheme instead of Colors.black and fontSize numbers.' },
        { h: 'A light / dark switch', p: 'MyApp becomes a StatefulWidget that remembers the mode. A moon / sun ThemeButton calls a function passed down to the pages.' },
        { h: 'Best practices', p: 'Never hard-code colors, test both modes, and check that the text is easy to read.' },
      ],
      code: [
        {
          title: 'One theme for the whole app', file: 'lib/theme/app_theme.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';

// The one color we choose. Flutter makes all the others from it.
const Color seedColor = Colors.teal;

ThemeData buildTheme(Brightness brightness) {
  final colorScheme = ColorScheme.fromSeed(
    seedColor: seedColor,
    brightness: brightness,
  );

  return ThemeData(
    colorScheme: colorScheme,
    // Every TextField: rounded outline border.
    inputDecorationTheme: InputDecorationThemeData(
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
    ),
    // Every ElevatedButton: filled with the primary color.
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: colorScheme.primary,
        foregroundColor: colorScheme.onPrimary,
        textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
    ),
  );
}`,
          notes: [
            ['4', 'The <b>seed color</b>: change this one line and the whole app changes color.'],
            ['6', 'One function makes both themes. Give it <code>Brightness.light</code> or <code>Brightness.dark</code>.'],
            ['7–10', '<b>ColorScheme.fromSeed</b> builds every color from the seed: primary, surface, and the "on" colors for text on top of them.'],
            ['15–17', 'Every <b>TextField</b> in the app gets a rounded border, so <code>AppTextField</code> needs no border line.'],
            ['19–26', 'Every <b>ElevatedButton</b> gets the primary color, so <code>AppButton</code> follows the theme too.'],
          ],
        },
        {
          title: 'MyApp remembers the mode', file: 'lib/main.dart', lang: 'dart',
          src: `class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  ThemeMode themeMode = ThemeMode.system;

  void changeTheme(bool isDark) {
    setState(() {
      themeMode = isDark ? ThemeMode.dark : ThemeMode.light;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: buildTheme(Brightness.light),
      darkTheme: buildTheme(Brightness.dark),
      themeMode: themeMode,
      home: LoginPage(onThemeChanged: changeTheme),
    );
  }
}`,
          notes: [
            ['1', '<b>MyApp</b> is now a StatefulWidget: it remembers the mode for the whole app.'],
            ['9', 'Start with <b>ThemeMode.system</b>: follow the phone\'s setting.'],
            ['11–15', '<b>changeTheme</b> picks dark or light inside <b>setState</b>, so the app rebuilds in the new look.'],
            ['20–22', '<b>theme</b> = the light look, <b>darkTheme</b> = the dark look, <b>themeMode</b> decides which one is used.'],
            ['23', 'Pass the function down. The moon / sun button on each page calls it.'],
          ],
        },
      ],
      videos: [
        { title: 'Light & Dark Mode', channel: 'Mitch Koko', id: '-jdtfJe_sII', len: '8:09', about: 'Making a light and a dark theme for an app and switching between them.' },
      ],
      practice: [
        'Change seedColor to your favorite color and check both modes',
        'Make every TextButton bold from the theme',
        'Add a "Dark mode" Switch on the Home page',
        'Theme your Sign up page with no hard-coded colors',
        'Bonus: a System / Light / Dark SegmentedButton',
      ],
      mistakes: [
        ['Dark mode does nothing: the app stays light', 'Add darkTheme: buildTheme(Brightness.dark) and check themeMode.'],
        ['Some text disappears in dark mode', 'It has a hard-coded color like Colors.black. Use a colorScheme color instead.'],
        ['The theme\'s rounded border doesn\'t show on AppTextField', 'The widget still sets border:. Delete that line; the theme does it now.'],
        ['Undefined name \'onThemeChanged\'.', 'Inside a State class, write widget.onThemeChanged.'],
        ['The named parameter \'onThemeChanged\' is required, but there\'s no corresponding argument.', 'Pass the function: LoginPage(onThemeChanged: changeTheme).'],
        ['Tapping the moon icon does nothing', 'Change themeMode inside setState(() { … }).'],
      ],
    },
    {
      t: 'Localization:', s: 'Arabic & English', slides: 20,
      url: `${SITE}/flutter-lecture-11/`,
      summary: 'Make the app speak Arabic and English with easy_localization, switch language with one button, and flip the layout right-to-left.',
      about: 'Our app learns a second language. We meet the words localization, locale and right-to-left, then set up the easy_localization package: one JSON file per language, and a few lines in pubspec.yaml, main() and MaterialApp. We show texts with context.tr(), put the email inside a sentence, get plurals right in both languages, and switch the language with one button that the app remembers. Finally we make the Lecture 9 login and home pages flip correctly to right-to-left in Arabic.',
      chips: ['Localization', 'Locale', 'easy_localization', 'JSON files', 'context.tr()', 'namedArgs', 'Plurals', 'setLocale', 'RTL'],
      goals: [
        'Explain localization, locale and right-to-left (RTL)',
        'Set up easy_localization with en.json and ar.json',
        'Show translated text with context.tr(), with values inside and plurals',
        'Switch the language with one button using context.setLocale()',
        'Make layouts flip correctly in Arabic with start and end',
      ],
      sections: [
        { h: 'What is localization?', p: 'The app speaks the user\'s language. A locale is a language code like en or ar. Arabic is read right to left (RTL).' },
        { h: 'Two ways to localize', p: 'Flutter\'s built-in ARB files, or the easy_localization package: JSON files and switching the language in one line.' },
        { h: 'Set it up in 4 steps', p: 'The JSON files in assets/translations, pubspec.yaml (and Info.plist on iOS), EasyLocalization in main(), and three lines in MaterialApp.' },
        { h: 'Keys and context.tr()', p: 'Each text gets a key like login.title. context.tr(\'login.title\') shows it in the current language.' },
        { h: 'Values and plurals', p: 'namedArgs puts the email inside a sentence. context.plural picks the right sentence for 0, 1 or many, and Arabic also has a form for two.' },
        { h: 'A language button', p: 'context.setLocale() switches the app while it runs, and easy_localization remembers the choice.' },
        { h: 'Translate the login and home pages', p: 'Every text on the Lecture 9 pages moves into the JSON files.' },
        { h: 'Right-to-left', p: 'Rows, AppBars and padding flip by themselves. Use EdgeInsetsDirectional, AlignmentDirectional and TextAlign.start for the rest. An Arabic font is optional.' },
      ],
      code: [
        {
          title: 'The English translation file', file: 'assets/translations/en.json', lang: 'json',
          src: `{
  "login": {
    "title": "Welcome back",
    "subtitle": "Log in to continue",
    "email": "Email",
    "password": "Password",
    "forgot": "Forgot password?",
    "button": "Login",
    "no_account": "Don't have an account?",
    "sign_up": "Sign up"
  },
  "home": {
    "title": "Home",
    "welcome": "Welcome!",
    "logged_in_as": "You are logged in as {email}",
    "messages": {
      "zero": "You have no new messages",
      "one": "You have one new message",
      "other": "You have {} new messages"
    },
    "logout": "Logout"
  }
}`,
          notes: [
            ['1', 'One file per language. <b>ar.json</b> has the same keys with Arabic text. List the folder in <code>pubspec.yaml</code>.'],
            ['2–3', 'A <b>nested key</b>: <code>login.title</code>. Show it with <code>Text(context.tr(\'login.title\'))</code>.'],
            ['15', '<b>namedArgs</b>: the code fills in <code>{email}</code>: <code>context.tr(\'home.logged_in_as\', namedArgs: {\'email\': email})</code>.'],
            ['16–20', '<b>Plurals</b>: <code>context.plural(\'home.messages\', 3)</code> picks the right sentence and puts the number in <code>{}</code>. Arabic also has <code>"two"</code>.'],
          ],
        },
        {
          title: 'A language button', file: 'lib/widgets/language_button.dart', lang: 'dart',
          src: `import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

class LanguageButton extends StatelessWidget {
  const LanguageButton({super.key});

  @override
  Widget build(BuildContext context) {
    final bool isArabic = context.locale.languageCode == 'ar';

    return TextButton.icon(
      onPressed: () {
        context.setLocale(isArabic ? const Locale('en') : const Locale('ar'));
      },
      icon: const Icon(Icons.language),
      label: Text(isArabic ? 'English' : 'العربية'),
    );
  }
}`,
          notes: [
            ['1', 'Import easy_localization in every file that uses <code>context.tr()</code> or <code>context.locale</code>.'],
            ['9', '<b>context.locale</b> is the language right now. Its <code>languageCode</code> is <code>\'en\'</code> or <code>\'ar\'</code>.'],
            ['13', '<b>context.setLocale()</b> switches the language: every <code>context.tr()</code> text updates, Arabic flips to right-to-left, and the choice is remembered.'],
            ['16', 'The button shows the <b>other</b> language, written in that language.'],
          ],
        },
      ],
      videos: [
        { title: 'Localization in Flutter (in Arabic)', channel: 'Tharwat Samy', id: 'DMmvd5LAHuA', len: '30:16', about: 'A full explanation of making a Flutter app speak more than one language, in Arabic.' },
        { title: 'How to use the Easy Localization package', channel: 'Yazeed AlKhalaf', id: 'cposNqIsyAY', len: '20:42', about: 'Setting up easy_localization with JSON files and switching between languages.' },
      ],
      practice: [
        'Translate your Sign up page into Arabic and English',
        'Add a "Phone language" button with context.resetLocale()',
        'Change every left / right in your code to start / end',
        'A cart counter with plurals: check 0, 1, 2, 5 and 12 in both languages',
        'Bonus: use the Cairo font for Arabic only',
      ],
      mistakes: [
        ['Unable to load asset: "assets/translations/en.json".', 'Add - assets/translations/ to pubspec.yaml, then stop and run the app again.'],
        ['The screen shows a key like login.titel', 'The key is misspelled or missing. Keep the same keys in en.json and ar.json.'],
        ['Localization not found for current context', 'Wrap the app in EasyLocalization in main() and add localizationsDelegates to MaterialApp.'],
        ['I changed a JSON file but the app shows the old text', 'Use hot restart, not hot reload.'],
        ['Some texts stay in the old language', 'Use context.tr(\'key\'), not \'key\'.tr().'],
        ['The getter \'rtl\' isn\'t defined for the type \'TextDirection\'', 'Check context.locale.languageCode == \'ar\' instead.'],
      ],
    },
    {
      t: 'Advanced Widgets:', s: 'Lists, Grids, Pages & Layouts', slides: 20,
      url: `${SITE}/flutter-lecture-12/`,
      summary: 'The screens real apps are made of: lists, product grids, swipeable pages, text over pictures, chips that wrap.',
      about: 'Real apps are made of lists, grids and pages. We build Tripoli Market, a small app with six pages: a chat list with ListView and ListTile, categories and a product grid with GridView, a cart badge with Stack and Positioned, a swipeable offers carousel with PageView and dots, a layout lab for Expanded, Flexible and Wrap, and a shop page with a header that shrinks as you scroll. Along the way we read and fix the two most famous layout errors.',
      chips: ['ListView.builder', 'ListTile', 'GridView.builder', 'PageView', 'Expanded vs Flexible', 'Stack & Positioned', 'Wrap & Chip', 'SliverAppBar'],
      goals: [
        'Build scrolling lists with ListView.builder, ListTile and CircleAvatar',
        'Build a product grid with GridView.builder and choose its columns and shape',
        'Make a swipeable carousel with PageView and page dots',
        'Put text over a picture and a badge on an icon with Stack and Positioned',
        'Use Wrap instead of a Row that overflows',
        'Fix the "unbounded height" and "RenderFlex overflowed" errors',
      ],
      sections: [
        { h: 'ListView and ListView.builder', p: 'A few rows written by hand, or many rows built from data, only when they are on the screen.' },
        { h: 'A chat list', p: 'ListTile with a CircleAvatar, and ListView.separated for a line between rows.' },
        { h: 'Grids and a product card', p: 'GridView.count for a few tiles, GridView.builder for many. A card with a photo, a name, a price and an add button.' },
        { h: 'SingleChildScrollView vs ListView', p: 'One form that scrolls, or a long list of similar rows.' },
        { h: 'PageView', p: 'Swipe between pages, with a PageController, dots that follow the page, and a Next button.' },
        { h: 'Expanded vs Flexible', p: 'Expanded must fill its space. Flexible may stay smaller.' },
        { h: 'Stack and Positioned', p: 'Widgets on top of each other: text over a photo, and a red number on the cart icon.' },
        { h: 'Wrap, chips and SliverAppBar', p: 'Chips that move to the next line instead of overflowing, and a header that shrinks as you scroll.' },
      ],
      code: [
        {
          title: 'A chat list', file: 'lib/pages/contacts_page.dart · inside the Column', lang: 'dart',
          src: `// A ListView inside a Column must be wrapped in Expanded.
Expanded(
  child: ListView.separated(
    itemCount: contacts.length,
    separatorBuilder: (context, index) => const Divider(height: 1),
    itemBuilder: (context, index) {
      final contact = contacts[index];
      return ListTile(
        leading: CircleAvatar(child: Text(contact.name[0])),
        title: Text(contact.name),
        subtitle: Text(contact.lastMessage),
        trailing: Text(contact.time),
        onTap: () {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Open chat: \${contact.name}')),
          );
        },
      );
    },
  ),
),`,
          notes: [
            ['1–2', '<b>Expanded</b>: a ListView inside a Column needs it, or you get "Vertical viewport was given unbounded height".'],
            ['3–4', '<b>ListView.separated</b> builds rows from data. <code>itemCount</code> = how many rows.'],
            ['5', '<b>separatorBuilder</b> draws a line <b>between</b> the rows.'],
            ['6–7', '<b>itemBuilder</b> runs once for each row you can see. <code>index</code> is 0, 1, 2…'],
            ['8–12', '<b>ListTile</b>: a ready-made row. <b>CircleAvatar</b> shows the first letter of the name.'],
          ],
        },
        {
          title: 'A product grid', file: 'lib/pages/products_page.dart · inside Scaffold', lang: 'dart',
          src: `// GridView.builder: many items from data, built only when visible.
body: GridView.builder(
  padding: const EdgeInsets.all(12),
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2, // 2 cards in each row
    mainAxisSpacing: 12, // space between rows
    crossAxisSpacing: 12, // space between columns
    childAspectRatio: 0.75, // card width ÷ card height
  ),
  itemCount: products.length,
  itemBuilder: (context, index) {
    return ProductCard(product: products[index], onAdd: addToCart);
  },
),`,
          notes: [
            ['2', '<b>GridView.builder</b>: like ListView.builder, but in columns.'],
            ['4', 'The <b>grid delegate</b> decides the shape: here, a fixed number of columns.'],
            ['5–7', '<b>crossAxisCount</b> = the number of columns. The two spacings are the gaps between rows and columns.'],
            ['8', '<b>childAspectRatio</b> = width ÷ height. Cards overflow at the bottom? Make it smaller, for example 0.65.'],
            ['12', 'Each cell is our own <b>ProductCard</b>. <code>onAdd</code> adds 1 to the cart badge with setState.'],
          ],
        },
      ],
      videos: [
        { title: 'ListView (Widget of the Week)', channel: 'Flutter', id: 'KJpkjHGiI5A', len: '1:29', about: 'The Flutter team\'s one-minute look at scrolling lists.' },
        { title: 'GridView (Widget of the Week)', channel: 'Flutter', id: 'bLOtZDTm4H8', len: '1:14', about: 'Tiles in rows and columns, in one minute.' },
        { title: 'ListView & Builder', channel: 'Mitch Koko', id: 'k1LxTsmAURU', len: '9:06', about: 'Building a list from data with ListView.builder, step by step.' },
      ],
      practice: [
        'A Settings page: a ListView of five ListTiles with icons',
        'Add five contacts and a green unread number to the chat list',
        'A grid of six Tripoli restaurants with photos and ratings',
        'A 3-page onboarding PageView with dots and a Skip button',
        'A profile header: a round photo over the cover, then a Wrap of chips',
      ],
      mistakes: [
        ['Vertical viewport was given unbounded height.', 'A ListView is inside a Column. Wrap it in Expanded or give it a height.'],
        ['A RenderFlex overflowed by 924 pixels on the right.', 'Too many chips in a Row. Use Wrap.'],
        ['A RenderFlex overflowed by 18 pixels on the bottom. (in every grid card)', 'Put the image in Expanded and lower childAspectRatio, for example to 0.65.'],
        ['Incorrect use of ParentDataWidget.', 'Positioned must be directly inside a Stack, Expanded directly inside a Row or Column.'],
        ['The dots don\'t change when you swipe', 'In onPageChanged, change currentPage inside setState.'],
        ['Product photos stay empty', 'Open the URL in a browser, check the internet, and keep the errorBuilder.'],
      ],
    },
    {
      t: 'State Management 1:', s: 'Introduction', slides: 20,
      url: `${SITE}/flutter-lecture-13/`,
      summary: 'What state is, when setState is enough, and why sharing data between screens needs a better tool.',
      about: 'Today we give a name to something we have used since Lecture 9: state. We see that the screen is built from the data, sort state into local and shared, and use setState where it shines. Then we build a Mini Shop with a cart badge, lift the count up to a parent, and watch it break when we open the cart page. That pain is why state management exists: keep the data in one place and let widgets listen. We fix the shop with Flutter\'s own ValueNotifier and compare the popular packages.',
      chips: ['State', 'UI = f(state)', 'Local vs shared', 'setState', 'Lifting state up', 'Prop drilling', 'ValueNotifier', 'ValueListenableBuilder'],
      goals: [
        'Explain state as data that can change and affects the screen',
        'Tell local state from shared state',
        'Lift state up: data goes down, callbacks go up',
        'Explain the pains of bigger apps: prop drilling and too many rebuilds',
        'Share one value between two screens with ValueNotifier',
        'Name Provider, Riverpod, Bloc and GetX and what each is good for',
      ],
      sections: [
        { h: 'What is state?', p: 'Any data that can change and affects the screen: the cart count, the logged-in user, dark mode, the language.' },
        { h: 'UI = f(state)', p: 'The screen is built from the data. Change the data and Flutter rebuilds the screen.' },
        { h: 'Local vs shared state', p: 'Local state belongs to one widget, so setState is enough. Shared state is needed by many screens.' },
        { h: 'The Mini Shop and lifting state up', p: 'A product list and a cart badge. Move the count to the common parent: data goes down, callbacks go up.' },
        { h: 'Opening the cart page… and a bug', p: 'The cart page gets a copy of the number. Clear the cart and it still shows the old value.' },
        { h: 'The pains in bigger apps', p: 'Prop drilling, rebuilding the whole page for one number, logic mixed with the UI, and code that is hard to test.' },
        { h: 'ValueNotifier', p: 'Keep the data in one place and let widgets listen. ValueListenableBuilder rebuilds only what listens, and both screens stay in sync.' },
        { h: 'State management packages', p: 'Provider, Riverpod, Bloc/Cubit, GetX and MobX compared, and which one to choose. Next lecture: Provider.' },
      ],
      code: [
        {
          title: 'The badge listens', file: 'lib/cart_badge.dart', lang: 'dart',
          src: `import 'package:flutter/material.dart';

import 'cart_count.dart';

class CartBadge extends StatelessWidget {
  const CartBadge({super.key});

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<int>(
      valueListenable: cartCount,
      builder: (context, count, child) {
        debugPrint('CartBadge build: $count');
        return Badge.count(
          count: count,
          isLabelVisible: count > 0,
          child: const Icon(Icons.shopping_cart),
        );
      },
    );
  }
}`,
          notes: [
            ['3', '<b>cart_count.dart</b> has one line: <code>final ValueNotifier&lt;int&gt; cartCount = ValueNotifier&lt;int&gt;(0);</code> One place for the data.'],
            ['10–11', '<b>ValueListenableBuilder</b> listens to <code>cartCount</code>.'],
            ['12', 'Every time the value changes, only this <b>builder</b> runs again, with the new <code>count</code>.'],
            ['13', 'The Debug Console shows each rebuild. Compare it with the setState version.'],
            ['14–18', '<b>Badge.count</b>: a small number on the cart icon, hidden when it is 0.'],
          ],
        },
        {
          title: 'Any widget can change it', file: 'lib/products_page.dart', lang: 'dart',
          src: `class ProductTile extends StatelessWidget {
  const ProductTile({super.key, required this.name});

  final String name;

  @override
  Widget build(BuildContext context) {
    debugPrint('ProductTile build: $name');
    return ListTile(
      leading: const Icon(Icons.shopping_bag_outlined),
      title: Text(name),
      trailing: IconButton(
        onPressed: () {
          cartCount.value++; // change the data, listeners rebuild
        },
        icon: const Icon(Icons.add_shopping_cart),
      ),
    );
  }
}`,
          notes: [
            ['1–2', 'No <code>onAdd</code> parameter any more: no callback passed through ProductList (no prop drilling).'],
            ['8', 'This line no longer prints on every tap: the tiles don\'t rebuild, only the listeners do.'],
            ['14', '<b>cartCount.value++</b> changes the shared data. Both badges and the cart page update, with no setState.'],
          ],
        },
      ],
      videos: [
        { title: 'What is State?', channel: 'Flutter', id: 'QlwiL_yLh6E', len: '6:54', about: 'The Flutter team explains what state is and how it shapes the screen.' },
        { title: 'Managing State in Flutter', channel: 'Flutter', id: 'vU9xDLdEZtU', len: '5:39', about: 'An overview of the ways to manage state in a Flutter app.' },
        { title: 'Flutter State Management: The Grand Tour', channel: 'Fireship', id: '3tm-R7ymwhc', len: '14:07', about: 'A fast tour of the popular state management options, side by side.' },
      ],
      practice: [
        'Mark 8 examples as local or shared state, with a reason',
        'Add a "Remove one" button that never goes below 0',
        'Add a favorites counter with a heart badge on both pages',
        'Switch dark mode from any page with a ValueNotifier<bool>',
        'Harder: keep a list of product names instead of a number',
      ],
      mistakes: [
        ['A variable changes but the screen doesn\'t update', 'Change it in setState, or keep it in a ValueNotifier and show it with ValueListenableBuilder.'],
        ['The method \'setState\' isn\'t defined for the type \'ProductTile\'.', 'setState only exists in a State class. Pass a callback up, or change a shared ValueNotifier.'],
        ['The cart page keeps showing an old value', 'It got a copy when it opened. Listen to the shared ValueNotifier there instead.'],
        ['Text(\'${cartCount.value}\') never updates', 'Reading .value doesn\'t listen. Wrap it in ValueListenableBuilder.'],
        ['cartItems.value.add(name) and nothing rebuilds', 'Give it a new list: cartItems.value = [...cartItems.value, name];'],
        ['Red screen after changing a StatefulWidget into a StatelessWidget', 'Do a hot restart, not a hot reload.'],
      ],
    },
    {
      t: 'State Management 2:', s: 'Provider', slides: 20,
      url: `${SITE}/flutter-lecture-14/`,
      summary: 'Share data across screens with Provider: ChangeNotifier, Consumer, context.watch and context.read.',
      about: 'Last lecture we kept the data in one place by hand. Today we use the package the Flutter docs recommend: provider. We write our first ChangeNotifier, put it above MaterialApp with ChangeNotifierProvider, and read it with Consumer, Provider.of, context.watch and context.read. We refactor the Lecture 9 counter, share a profile name between two screens with MultiProvider, and move dark mode into a ThemeProvider.',
      chips: ['provider', 'ChangeNotifier', 'notifyListeners', 'ChangeNotifierProvider', 'Consumer', 'context.watch', 'context.read', 'MultiProvider'],
      goals: [
        'Explain what Provider is and install the provider package',
        'Write a ChangeNotifier with private data, getters and notifyListeners()',
        'Provide it above MaterialApp with ChangeNotifierProvider and MultiProvider',
        'Show data with context.watch or Consumer, and change it with context.read',
        'Share data so a change on one screen updates another',
        'Fix the most common Provider errors',
      ],
      sections: [
        { h: 'From ValueNotifier to Provider', p: 'The same idea as last lecture, one place for the data, but cleaner. It is the tool the official Flutter docs use.' },
        { h: 'The three pieces', p: 'A ChangeNotifier holds the data, ChangeNotifierProvider puts it above the app, and widgets listen to it.' },
        { h: 'ChangeNotifier', p: 'CounterProvider: a private _count, a count getter, and methods that call notifyListeners().' },
        { h: 'Provide it above MaterialApp', p: 'Wrap MyApp in ChangeNotifierProvider in main(), so every screen can find it.' },
        { h: 'Reading the data', p: 'Consumer rebuilds only its builder. Provider.of with listen: false only reads. The short forms: context.watch to show, context.read to change.' },
        { h: 'Refactor the counter', p: 'The Lecture 9 counter becomes a StatelessWidget. The number lives in CounterProvider.' },
        { h: 'Sharing data between screens', p: 'ProfileProvider holds the name, MultiProvider registers several providers, and changing the name on Profile updates Home.' },
        { h: 'Dark mode with Provider', p: 'Optional: a ThemeProvider, so the theme button needs no function passed down.' },
      ],
      code: [
        {
          title: 'Our first ChangeNotifier', file: 'lib/counter_provider.dart', lang: 'dart',
          src: `import 'package:flutter/foundation.dart';

class CounterProvider extends ChangeNotifier {
  int _count = 0; // private: only this class can change it

  int get count => _count; // public, read-only

  void increment() {
    _count++;
    notifyListeners(); // tell every listening widget to rebuild
  }

  void reset() {
    _count = 0;
    notifyListeners();
  }
}`,
          notes: [
            ['3', '<b>ChangeNotifier</b>: a class that can tell widgets "I changed". Register it once in <code>main()</code>: <code>ChangeNotifierProvider(create: (context) =&gt; CounterProvider())</code>.'],
            ['4', '<b>_count</b> starts with <code>_</code>, so it is private: pages can\'t change it by mistake.'],
            ['6', 'A <b>getter</b>: pages read <code>counter.count</code> but can\'t write it.'],
            ['8–11', 'Methods change the data, then call <b>notifyListeners()</b>. Forget it and the screen won\'t update.'],
          ],
        },
        {
          title: 'watch to show, read to change', file: 'lib/profile_page.dart', lang: 'dart',
          src: `class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    final name = context.watch<ProfileProvider>().name;

    return Scaffold(
      appBar: AppBar(title: Text('Profile: $name')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: TextField(
          decoration: const InputDecoration(
            labelText: 'New name',
            prefixIcon: Icon(Icons.person),
            border: OutlineInputBorder(),
          ),
          onChanged: (value) {
            context.read<ProfileProvider>().changeName(value);
          },
        ),
      ),
    );
  }
}`,
          notes: [
            ['1', 'A <b>StatelessWidget</b>: the name lives in <code>ProfileProvider</code>, not in the page. The file imports <code>package:provider/provider.dart</code>.'],
            ['6', '<b>context.watch</b> = listen. When the name changes, this page rebuilds.'],
            ['9', 'Show the value. The Home page watches the same provider, so its title changes too.'],
            ['18–20', '<b>context.read</b> = just use, don\'t listen. Use it inside callbacks like <code>onChanged</code> and <code>onPressed</code>.'],
          ],
        },
      ],
      videos: [
        { title: 'Provider: Simple State Management', channel: 'Mitch Koko', id: 'uQuxrZE2dqA', len: '5:48', about: 'A short, clear first look at Provider and ChangeNotifier.' },
        { title: 'Provider and ChangeNotifier in 7 Minutes', channel: 'Fun with Flutter', id: 'NeAMD0lQ5jw', len: '7:23', about: 'ChangeNotifier, notifyListeners and reading the data, quickly explained.' },
        { title: 'ChangeNotifierProvider and Consumer (in Arabic)', channel: 'Wael abo hamza', id: 'NeMu2ftBN7o', len: '15:50', about: 'ChangeNotifierProvider and Consumer explained in Arabic.' },
      ],
      practice: [
        'Add a minus button; the "never below 0" rule lives in the provider',
        'Show "Counter: 3" in the AppBar with a Consumer',
        'Add a city to ProfileProvider and show it on Home',
        'Rebuild the Mini Shop with a CartProvider instead of a ValueNotifier',
        'An English / Arabic greeting that comes from the provider',
      ],
      mistakes: [
        ['Could not find the correct Provider<CounterProvider> above this CounterPage Widget', 'Put ChangeNotifierProvider around MyApp in main(), then hot restart.'],
        ['Tried to listen to a value exposed with provider, from outside of the widget tree.', 'Inside onPressed, use context.read, not context.watch.'],
        ['The method \'watch\' isn\'t defined for the type \'BuildContext\'.', 'Add import \'package:provider/provider.dart\'; at the top.'],
        ['The data changes but the screen doesn\'t update', 'Call notifyListeners() after every change, and use context.watch to show values.'],
        ['The count goes back to 0 after a hot reload', 'Create the provider once in main() with create:, not inside build().'],
        ['Tried to use Provider with a subtype of Listenable/Stream (CounterProvider).', 'Use ChangeNotifierProvider, not Provider, for a ChangeNotifier.'],
      ],
    },
    {
      t: 'APIs 1: HTTP, JSON', s: '& Your First GET Request', slides: 18,
      url: `${SITE}/flutter-lecture-15/`,
      summary: 'What an API is, how HTTP and JSON work, async and await, and showing data from the internet in a list.',
      about: 'Our app talks to the internet for the first time. We learn what an API is with the waiter example, how an HTTP request and response work, and what JSON looks like before we write any code. Then we meet Future, async and await, install the http package, and send our first GET request. We finish by downloading 100 posts from JSONPlaceholder and showing them in a list with FutureBuilder: a spinner while loading and a message if something fails.',
      chips: ['API', 'REST', 'HTTP', 'Status codes', 'JSON', 'jsonDecode', 'async / await', 'http.get', 'FutureBuilder'],
      goals: [
        'Explain what an API is with the restaurant waiter example',
        'Describe an HTTP request and response, and read the codes 200, 201, 404 and 500',
        'Read a JSON response and turn it into Dart with jsonDecode',
        'Explain Future, async and await, and why the app doesn\'t freeze',
        'Send a GET request with the http package and check the status code',
        'Show the data with FutureBuilder and ListView.builder: loading, error and data',
      ],
      sections: [
        { h: 'What is an API?', p: 'A waiter between you and the kitchen. A REST API uses URLs for things and methods for actions: GET, POST, PUT, DELETE.' },
        { h: 'Request and response', p: 'A request has a URL, a method, headers and a body. The answer has a status code: 200 OK, 201 created, 404 not found, 500 server error.' },
        { h: 'JSON', p: 'The language of APIs: objects in { }, lists in [ ]. jsonDecode turns it into a Dart Map or List.' },
        { h: 'Look before you code', p: 'Open the URL in a browser first and see the data.' },
        { h: 'Setup', p: 'flutter pub add http, and the INTERNET permission in AndroidManifest.xml for release builds.' },
        { h: 'Future, async and await', p: 'A Future is a value that comes later. await waits without freezing the app, like ordering tea.' },
        { h: 'Your first GET request', p: 'http.get(Uri.parse(…)), check statusCode, then jsonDecode the body.' },
        { h: 'FutureBuilder and the list', p: 'A widget that waits: a spinner while loading, a message on error, and 100 posts in a ListView.builder.' },
      ],
      code: [
        {
          title: 'Your first GET request', file: 'lib/pages/posts_page.dart', lang: 'dart',
          src: `import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// Asks the server for all posts and gives back a List of Maps.
Future<List<dynamic>> fetchPosts() async {
  final url = Uri.parse('https://jsonplaceholder.typicode.com/posts');
  final response = await http.get(url);

  if (response.statusCode == 200) {
    return jsonDecode(response.body) as List<dynamic>;
  } else {
    throw Exception('Failed to load posts (\${response.statusCode})');
  }
}`,
          notes: [
            ['1', '<b>dart:convert</b> gives us <code>jsonDecode</code>.'],
            ['4', 'The <b>http</b> package (<code>flutter pub add http</code>). <code>as http</code> lets us write <code>http.get</code>.'],
            ['7', '<b>Future</b>: the list comes later. <b>async</b> lets the function use <code>await</code>.'],
            ['8–9', '<b>Uri.parse</b> turns the text into a URL. <b>await</b> waits for the answer without freezing the app.'],
            ['11', '<b>200</b> = OK. Check it before decoding: a wrong URL sends back an HTML page, not JSON.'],
            ['12', '<b>jsonDecode</b> turns the text into Dart. This JSON starts with <code>[</code>, so it is a <code>List</code>.'],
          ],
        },
        {
          title: 'FutureBuilder shows the posts', file: 'lib/pages/posts_page.dart · inside Scaffold', lang: 'dart',
          src: `body: FutureBuilder<List<dynamic>>(
  future: _postsFuture,
  builder: (context, snapshot) {
    // 1. Still waiting for the server?
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(child: CircularProgressIndicator());
    }

    // 2. Something went wrong?
    if (snapshot.hasError) {
      return Center(child: Text('Error: \${snapshot.error}'));
    }

    // 3. Finished, but no data?
    if (!snapshot.hasData) {
      return const Center(child: Text('No posts found'));
    }

    // 4. We have the data!
    final posts = snapshot.data!;
    return ListView.builder(
      itemCount: posts.length,
      itemBuilder: (context, index) {
        final post = posts[index] as Map<String, dynamic>;
        return ListTile(
          leading: CircleAvatar(child: Text('\${post['id']}')),
          title: Text(post['title']),
          subtitle: Text(post['body'], maxLines: 2),
        );
      },
    );
  },
),`,
          notes: [
            ['1–2', '<b>FutureBuilder</b> waits for a Future and rebuilds when it is done. <code>_postsFuture = fetchPosts()</code> was started once in <code>initState()</code>, never inside build().'],
            ['5–7', 'Still waiting: show a <b>spinner</b>.'],
            ['10–12', 'It failed (no internet, wrong URL): show the <b>error</b>.'],
            ['20–21', 'We have the data: <code>snapshot.data!</code> is the list of 100 posts, shown with <b>ListView.builder</b>.'],
            ['24–28', 'Each post is a <b>Map</b>. Read a value with <code>post[\'title\']</code>.'],
          ],
        },
      ],
      videos: [
        { title: 'HTTP Requests and REST API', channel: 'HeyFlutter', id: '4hq_Kwu7sgU', len: '4:33', about: 'Sending a GET request with the http package and reading the response.' },
        { title: 'Building a ListView with JSON Data', channel: 'HeyFlutter', id: '1OEhIpBIZXM', len: '2:18', about: 'Turning a JSON list from the internet into a scrolling ListView.' },
        { title: 'FutureBuilder (Widget of the Week)', channel: 'Flutter', id: 'zEdw_1B7JHY', len: '1:30', about: 'The widget that waits for a Future and shows loading, error or data.' },
      ],
      practice: [
        'Load only ten posts with ?_limit=10',
        'A Users page: 10 users with their name, email and first letter',
        'A Todos page with ticked and empty boxes',
        'Tap a post to open a details page with its title and body',
        'Harder: load the comments of a post on its details page',
        'Bonus: a Reload button in the AppBar',
      ],
      mistakes: [
        ['The argument type \'String\' can\'t be assigned to the parameter type \'Uri\'.', 'Write http.get(Uri.parse(\'https://…\')).'],
        ['Undefined name \'http\'.', 'Add import \'package:http/http.dart\' as http; at the top.'],
        ['The await expression can only be used in an async function.', 'Add async before the function body.'],
        ['The release APK shows SocketException: Failed host lookup', 'Add the INTERNET permission to android/app/src/main/AndroidManifest.xml.'],
        ['type \'_Map<String, dynamic>\' is not a subtype of type \'List<dynamic>\' in type cast', 'The JSON starts with {, not [. Cast it to Map<String, dynamic>.'],
        ['The spinner flashes and the request runs again on every hot reload', 'Start the Future once in initState(), not inside build().'],
      ],
    },
    {
      t: 'Firebase 1:', s: 'Introduction & Project Setup', slides: 18,
      url: `${SITE}/flutter-lecture-16/`,
      summary: 'What Firebase is, creating a Firebase project, and connecting the app with the FlutterFire CLI.',
      about: 'A real login needs a server, and Firebase is a ready-made one that Google runs for us. We see what Firebase is and what its services do, create our first Firebase project in the console, and install two command-line tools: the Firebase CLI and the FlutterFire CLI. One command, flutterfire configure, connects the app. We start Firebase in main(), check the connection on a small page, and turn on Email/Password sign-in for the next lecture.',
      chips: ['Firebase', 'Backend-as-a-service', 'Firebase console', 'Firebase CLI', 'FlutterFire CLI', 'flutterfire configure', 'Firebase.initializeApp', 'Authentication'],
      goals: [
        'Explain what Firebase is and name its main services',
        'Create a Firebase project in the console',
        'Install the Firebase CLI and the FlutterFire CLI, and log in',
        'Connect the app with flutterfire configure and know which files it makes',
        'Start Firebase in main() before runApp',
        'Explain users, providers and the uid, and turn on Email/Password',
      ],
      sections: [
        { h: 'What is Firebase?', p: 'A ready-made server from Google. No server code to write, official Flutter packages, and free to start.' },
        { h: 'Services and the free plan', p: 'Authentication, Firestore, Storage, Cloud Messaging and more. Authentication is free on the Spark plan.' },
        { h: 'Create a Firebase project', p: 'In console.firebase.google.com: a name, a project ID, and Analytics off for this course.' },
        { h: 'The two CLIs', p: 'Install the Firebase CLI and log in, then the FlutterFire CLI. Once per computer.' },
        { h: 'flutterfire configure', p: 'Add firebase_core and firebase_auth, then pick your Firebase project and platforms. It creates firebase_options.dart and the Android and iOS settings.' },
        { h: 'Start Firebase in main()', p: 'ensureInitialized(), await Firebase.initializeApp(), then runApp. A check page shows the project ID.' },
        { h: 'Firebase Authentication', p: 'Users, providers, the uid and the current user. Turn on Email/Password in the console for the next lecture.' },
      ],
      code: [
        {
          title: 'The setup commands', file: 'Terminal', lang: 'shell',
          src: `npm install -g firebase-tools
firebase login
dart pub global activate flutterfire_cli
flutter pub add firebase_core firebase_auth
flutterfire configure`,
          notes: [
            ['1', 'Installs the <b>Firebase CLI</b> (it needs Node.js). Once per computer.'],
            ['2', 'Opens the browser: sign in with the <b>same Google account</b> as the Firebase console.'],
            ['3', 'Installs the <b>FlutterFire CLI</b>. "Not recognized"? Add the pub-cache bin folder to your PATH.'],
            ['4', 'Adds the two packages. Run it in the folder that has <code>pubspec.yaml</code>.'],
            ['5', 'Pick your Firebase project and the platforms. It writes <b>firebase_options.dart</b> and google-services.json for you.'],
          ],
        },
        {
          title: 'Start Firebase in main()', file: 'lib/main.dart', lang: 'dart',
          src: `import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

import 'firebase_options.dart';

Future<void> main() async {
  // 1. Get Flutter ready before we use any plugin.
  WidgetsFlutterBinding.ensureInitialized();

  // 2. Connect the app to our Firebase project, and wait until it is done.
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  // 3. Now we can start the app.
  runApp(const MyApp());
}`,
          notes: [
            ['1–2', 'The two packages: <b>firebase_core</b> connects the app, <b>firebase_auth</b> is for accounts (the check page shows the current user).'],
            ['5', '<b>firebase_options.dart</b> was made by <code>flutterfire configure</code>. Never type it by hand.'],
            ['7', '<code>main</code> now waits for something, so it is <b>async</b> and returns a <b>Future</b> (lecture 15).'],
            ['9', '<b>ensureInitialized()</b> comes first: Flutter must be ready before a plugin talks to Android or iOS.'],
            ['12', '<b>await Firebase.initializeApp</b> connects to <b>your</b> Firebase project. <code>currentPlatform</code> picks the Android, iOS or web settings.'],
            ['15', '<b>runApp</b> comes last: the app starts only when Firebase is ready.'],
          ],
        },
      ],
      videos: [
        { title: 'Add Firebase to your Flutter app: The fast way', channel: 'Firebase', id: 'FkFvQ0SaT1I', len: '3:21', about: 'The Firebase team connects a Flutter app with the FlutterFire CLI.' },
        { title: 'Setup Flutter Firebase using FlutterFire CLI on Windows', channel: 'ProgrammingKnowledge', id: 'GvrcrsTOiIY', len: '8:57', about: 'The same setup step by step on Windows, including installing the CLIs.' },
      ],
      practice: [
        'Connect your own copy of the app to a new Firebase project',
        'Break and fix: remove ensureInitialized(), then await, and write down each error',
        'Find your project ID, registered apps and the Email/Password switch in the console',
        'Run flutterfire configure again with web and open the check page in Chrome',
        'Show the platform name and the appId on the check page',
      ],
      mistakes: [
        ['\'flutterfire\' is not recognized… / command not found: flutterfire', 'Add the pub-cache bin folder to your PATH, then reopen the terminal and VS Code.'],
        ['The FlutterFire CLI currently requires the official Firebase CLI to also be installed', 'Run npm install -g firebase-tools, then flutterfire configure again.'],
        ['Error: Failed to authenticate, have you run firebase login?', 'Run firebase login with the same Google account as the console.'],
        ['The current directory does not appear to be a Flutter application project.', 'cd into the folder with pubspec.yaml first.'],
        ['No Firebase App \'[DEFAULT]\' has been created - call Firebase.initializeApp()', 'Add await Firebase.initializeApp(…) in main() before runApp, then stop and run again.'],
        ['Binding has not yet been initialized.', 'Add WidgetsFlutterBinding.ensureInitialized(); as the first line of main().'],
      ],
    },
    {
      t: 'Firebase 2:', s: 'Email & Password Authentication', slides: 20,
      url: `${SITE}/flutter-lecture-17/`,
      summary: 'Real sign up, sign in and sign out with Firebase, with friendly error messages and staying logged in.',
      about: 'The login page finally works for real. We read the fields with TextEditingController, put every Firebase call in a small AuthService class, create accounts with createUserWithEmailAndPassword and sign in with signInWithEmailAndPassword. Firebase errors become friendly messages, the button shows a spinner while it waits, and an AuthGate built with StreamBuilder keeps the user logged in after the app restarts. Home greets the user by name, and Logout signs out.',
      chips: ['Sign up / in / out', 'FirebaseAuth', 'TextEditingController', 'AuthService', 'FirebaseAuthException', 'Loading button', 'AuthGate', 'authStateChanges'],
      goals: [
        'Explain sign up, sign in and sign out',
        'Read text fields with a TextEditingController and dispose it',
        'Create accounts, sign in and sign out with Firebase',
        'Turn Firebase error codes into friendly messages',
        'Show a loading button and green or red SnackBars',
        'Stay logged in after a restart with an AuthGate',
      ],
      sections: [
        { h: 'Real accounts', p: 'Sign up once, sign in many times, sign out when you leave. An AuthGate decides: Login or Home?' },
        { h: 'TextEditingController', p: 'Read what the user typed with .text, and dispose() it when the page closes. AppTextField gets a controller, AppButton a loading state.' },
        { h: 'AuthService', p: 'One small class holds every Firebase call: signUp, signIn and signOut. The pages never call Firebase directly.' },
        { h: 'Friendly error messages', p: 'Catch FirebaseAuthException and turn its code into a sentence. A wrong email and a wrong password both give invalid-credential.' },
        { h: 'The sign-up and login pages', p: 'Simple checks first (empty fields, short password), then call Firebase with a loading button and a SnackBar.' },
        { h: 'AuthGate: stay logged in', p: 'A StreamBuilder listens to authStateChanges() and shows Login or Home, even after the app restarts.' },
        { h: 'Home page and Logout', p: 'Greet the user by name. signOut() takes you back to Login.' },
        { h: 'Bonus: "Forgot password?"', p: 'sendPasswordResetEmail sends a reset link, plus a first look at Form and validator.' },
      ],
      code: [
        {
          title: 'Sign up with Firebase', file: 'lib/services/auth_service.dart · inside AuthService', lang: 'dart',
          src: `/// Sign up: create a new account (and sign in to it).
Future<String?> signUp({
  required String name,
  required String email,
  required String password,
}) async {
  try {
    final UserCredential credential = await _auth
        .createUserWithEmailAndPassword(email: email, password: password);
    await credential.user?.updateDisplayName(name);
    return null;
  } on FirebaseAuthException catch (e) {
    return messageFor(e.code);
  }
}`,
          notes: [
            ['2', 'Returns a <b>String?</b>: <code>null</code> = it worked, a text = what went wrong, ready for a SnackBar.'],
            ['3–5', 'Named, required parameters. The page reads them from its <b>TextEditingController</b>s, for example <code>_emailController.text</code>.'],
            ['8–9', '<b>createUserWithEmailAndPassword</b> makes the account and signs in. <code>_auth</code> is <code>FirebaseAuth.instance</code>.'],
            ['10', 'Save the name on the account, so Home can greet the user.'],
            ['12–13', 'Firebase said no: catch the <b>FirebaseAuthException</b> and turn its <code>code</code> into a friendly sentence. <code>signIn</code> looks the same with <code>signInWithEmailAndPassword</code>.'],
          ],
        },
        {
          title: 'AuthGate: Login or Home?', file: 'lib/auth_gate.dart', lang: 'dart',
          src: `class AuthGate extends StatelessWidget {
  const AuthGate({super.key});

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<User?>(
      stream: AuthService().authStateChanges(),
      builder: (context, snapshot) {
        // 1. Firebase is still checking: show a spinner.
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Scaffold(
            body: Center(child: CircularProgressIndicator()),
          );
        }
        // 2. We have a user: show the home page.
        if (snapshot.hasData) {
          return const HomePage();
        }
        // 3. Nobody is signed in: show the login page.
        return const LoginPage();
      },
    );
  }
}`,
          notes: [
            ['1', 'In <code>main.dart</code>, <code>home:</code> is now the <b>AuthGate</b>. It decides which page to show.'],
            ['6–7', '<b>StreamBuilder</b> is like FutureBuilder, but for many values. <b>authStateChanges()</b> sends a new one every time someone signs in or out.'],
            ['10–14', 'At the start Firebase checks the phone for a saved user: show a spinner.'],
            ['16–18', 'Someone is signed in: <b>Home</b>. Firebase remembers the user, so they stay logged in after a restart.'],
            ['20', 'Nobody: <b>Login</b>. After <code>signOut()</code> the gate shows it again by itself, with no Navigator.'],
          ],
        },
      ],
      videos: [
        { title: 'Flutter Firebase Auth: The Cleanest & Fastest Way', channel: 'Flutter Mapp', id: 'rWamixHIKmQ', len: '9:58', about: 'Email and password sign-in with Firebase, with all the auth code in one service.' },
        { title: 'Email & Password Authentication using Firebase', channel: 'Build with Akshit', id: 'ZOX2yD5Z3LA', len: '8:10', about: 'Sign up, sign in and sign out with Firebase, step by step.' },
      ],
      practice: [
        'Show "Member since" on Home with the account\'s creation date',
        'Add a Confirm password field that must match',
        'Add an eye icon that shows and hides the password',
        'Move the error messages into your Arabic and English JSON files',
        'Disable your test user in the console and check the message',
      ],
      mistakes: [
        ['[firebase_auth/operation-not-allowed]', 'Turn on Email/Password in the console: Authentication → Sign-in method.'],
        ['A wrong password shows "Something went wrong (invalid-credential)"', 'Handle invalid-credential in messageFor: it means a wrong email or password.'],
        ['setState() called after dispose()', 'After the await, write if (mounted) setState(…).'],
        ['Don\'t use \'BuildContext\'s across async gaps.', 'Save ScaffoldMessenger.of(context) in a variable before the await.'],
        ['After sign up, the sign-up page stays on the screen', 'Call navigator.pop() after a successful sign up.'],
        ['Home shows "Welcome, friend!" right after sign up', 'The name arrives a moment later. Listen to userChanges().'],
      ],
    },
    {
      t: 'Firebase 3:', s: 'Google Sign-In', slides: 18,
      url: `${SITE}/flutter-lecture-18/`,
      summary: 'A "Continue with Google" button: Firebase setup, Android fingerprints, and signing in and out.',
      about: 'We add a "Continue with Google" button to the Lecture 17 login page. First the setup: the Google provider in the Firebase console, the SHA-1 and SHA-256 fingerprints for Android, and the URL scheme for iOS. Then the code with the new google_sign_in 7.x API: initialize it once in main(), show Google\'s account picker, take the ID token and sign in to Firebase with it. We handle cancel and errors, show the user\'s Google name and photo, and sign out of both Google and Firebase.',
      chips: ['Google Sign-In', 'google_sign_in', 'ID token', 'SHA-1 / SHA-256', 'Info.plist', 'authenticate()', 'GoogleAuthProvider', 'Sign out'],
      goals: [
        'Explain the flow: account picker → ID token → Firebase credential → user',
        'Turn on the Google provider in the Firebase console',
        'Add your SHA-1 and SHA-256 fingerprints for Android',
        'Set up iOS with GIDClientID and the URL scheme',
        'Sign in with google_sign_in 7.x and Firebase, and handle cancel and errors',
        'Sign out of both Google and Firebase',
      ],
      sections: [
        { h: 'How Google Sign-In works', p: 'Pick a Google account, Google sends an ID token, and Firebase turns it into a user. No new password.' },
        { h: 'Turn on the Google provider', p: 'Console → Authentication → Sign-in method → Google, with a public name and a support email.' },
        { h: 'Android fingerprints', p: 'Get the SHA-1 and SHA-256 with signingReport or keytool, add them in Project settings, and run flutterfire configure again.' },
        { h: 'iOS settings', p: 'GIDClientID and the REVERSED_CLIENT_ID URL scheme in Info.plist (on a Mac only).' },
        { h: 'google_sign_in 7.x', p: 'Install it and call GoogleSignIn.instance.initialize() once in main().' },
        { h: 'signInWithGoogle()', p: 'authenticate() shows the picker, the ID token becomes a Firebase credential, and cancel and errors get friendly messages.' },
        { h: 'Sign out of both', p: 'Sign out of Google and Firebase, so next time Google asks which account.' },
        { h: 'The "Continue with Google" button', p: 'An OutlinedButton with the Google logo and a loading spinner, then the full flow end to end. On the web, Firebase opens a popup.' },
      ],
      code: [
        {
          title: 'Initialize Google Sign-In once', file: 'lib/main.dart', lang: 'dart',
          src: `import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';

import 'auth_gate.dart';
import 'firebase_options.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  // google_sign_in 7.x: call initialize() exactly ONCE, before anything else.
  // (On the web we use Firebase's signInWithPopup instead, so we skip it.)
  if (!kIsWeb) {
    await GoogleSignIn.instance.initialize();
  }

  runApp(const MyApp());
}`,
          notes: [
            ['2', '<b>foundation.dart</b> gives us <code>kIsWeb</code>: true when the app runs in a browser.'],
            ['4', 'The new package: <code>flutter pub add google_sign_in</code>.'],
            ['10–11', 'The same as lecture 16: get Flutter ready, then connect to Firebase.'],
            ['15–17', '<b>initialize()</b> exactly once, before any sign-in. <code>GoogleSignIn.instance</code> is the one Google Sign-In object.'],
            ['19', 'Then start the app. <code>MyApp</code> shows the <b>AuthGate</b> from lecture 17.'],
          ],
        },
        {
          title: 'Sign in with Google', file: 'lib/services/auth_service.dart · inside AuthService', lang: 'dart',
          src: `/// New: sign in with a Google account.
Future<String?> signInWithGoogle() async {
  try {
    // On the web, Firebase opens Google's popup for us.
    if (kIsWeb) {
      await _auth.signInWithPopup(GoogleAuthProvider());
      return null;
    }

    // 1. Show Google's account picker.
    final GoogleSignInAccount googleUser = await _googleSignIn.authenticate();

    // 2. Take the ID token: Google's proof of who the user is.
    final String? idToken = googleUser.authentication.idToken;
    if (idToken == null) {
      return 'Google did not send an ID token. Check the setup.';
    }

    // 3. Turn it into a Firebase credential and sign in to Firebase.
    final credential = GoogleAuthProvider.credential(idToken: idToken);
    await _auth.signInWithCredential(credential);
    return null;
  } on GoogleSignInException catch (e) {
    debugPrint('Google sign-in error: $e'); // full details in the console
    if (e.code == GoogleSignInExceptionCode.canceled) {
      return 'Google sign-in was canceled.';
    }
    return 'Google sign-in failed (\${e.code.name}).';
  } on FirebaseAuthException catch (e) {
    return messageFor(e.code);
  }
}`,
          notes: [
            ['5–8', 'On the <b>web</b>, Firebase opens Google\'s popup itself, so we stop here.'],
            ['11', '<b>authenticate()</b> shows Google\'s account picker. The user picks an account: no new password.'],
            ['14', 'The <b>ID token</b>: Google\'s signed proof of who the user is. In 7.x there is no <code>await</code> here and no <code>accessToken</code>.'],
            ['20–21', 'Pack the token into a Firebase <b>credential</b> and sign in. The first time, Firebase creates the user, then the AuthGate shows Home.'],
            ['23–28', 'Canceled, or a setup problem: a <b>GoogleSignInException</b>. The full error is in the Debug Console. "Canceled" right after picking an account usually means the SHA-1 is missing.'],
          ],
        },
      ],
      videos: [
        { title: 'Google Sign In · Flutter Auth Tutorial', channel: 'Mitch Koko', id: 'D5V3tknJ0NQ', len: '12:29', about: 'A Google sign-in button with Firebase. If the code looks different, follow the lecture: google_sign_in 7.x changed the API.' },
        { title: 'Google Login in Flutter Firebase (Android & iOS)', channel: 'WTF Code', id: 'ZiotKW7tFKg', len: '13:14', about: 'Google login with Firebase on both Android and iOS, setup included.' },
      ],
      practice: [
        'Show "Signed in with: Google" or "Email" on Home',
        'Add the Google button to the Sign up page too',
        'Move the Google messages into your Arabic and English JSON files',
        'Sign in with two Google accounts, one after the other',
        'Use the same Gmail with email and with Google, then look at the Users tab',
        'Bonus: sign in with Google in Chrome',
      ],
      mistakes: [
        ['"Google sign-in was canceled." although nobody canceled', 'Add your SHA-1 and SHA-256 in Project settings, run flutterfire configure, then stop and run again.'],
        ['serverClientId must be provided on Android', 'Turn on the Google provider first, then run flutterfire configure again.'],
        ['iOS crashes: Your app is missing support for the following URL schemes', 'Add the REVERSED_CLIENT_ID URL scheme to ios/Runner/Info.plist.'],
        ['The method \'signIn\' isn\'t defined for the type \'GoogleSignIn\'.', 'That is old 6.x code. Use GoogleSignIn.instance, initialize() and authenticate().'],
        ['No credential available (on the emulator)', 'Use an emulator with Google Play and sign in to a Google account in its Settings.'],
        ['The next sign-in reuses the same account without asking', 'Sign out of Google too: GoogleSignIn.instance.signOut().'],
      ],
    },
  ];

  const grades = [
    { name: 'Project 1', what: 'Profile Card', marks: 5, color: '#13B9FD' },
    { name: 'Project 2', what: 'Login & Sign Up', marks: 8, color: '#0EA5E9' },
    { name: 'Project 3', what: '', marks: 10, color: '#0175C2' },
    { name: 'Project 4', what: '', marks: 12, color: '#02569B' },
    { name: 'Midterm', what: '', marks: 25, color: '#0F766E' },
    { name: 'Final', what: '', marks: 40, color: '#0B2545' },
  ];

  return { SITE, instructor, playlist, lectures, grades };
})();
