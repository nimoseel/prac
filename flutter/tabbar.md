## controller 사용
```dart
class _AppBarUsingControllerState extends State<AppBarUsingController>
    with TickerProviderStateMixin {
  late final TabController tabController;

  @override
  void initState() {
    super.initState();

    tabController = TabController(
      length: TABS.length,
      vsync: this, 
    );
    tabController.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    // 탭 컨트롤러 만들어서 직접 컨트롤하는 방법
    return Scaffold(
      appBar: AppBar(
        title: Text('appbar using controller'),
        bottom: TabBar(
          controller: tabController,
          tabs: TABS
              .map(
                (e) => Tab(
                  icon: Icon(e.icon),
                  child: Text(e.label),
                ),
              )
              .toList(),
        ),
      ),
      body: TabBarView(
        controller: tabController,
        children: TABS
            .map(
              (e) => Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    e.icon,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      if (tabController.indexIsChanging != 0)
                        ElevatedButton(
                          onPressed: () {
                            tabController.animateTo(tabController.index - 1);
                          },
                          child: Text(
                            '이전',
                          ),
                        ),
                      const SizedBox(
                        width: 16.0,
                      ),
                      if (tabController.index != TABS.length - 1)
                        ElevatedButton(
                          onPressed: () {
                            tabController.animateTo(tabController.index + 1);
                          },
                          child: Text(
                            '다음',
                          ),
                        ),
                    ],
                  )
                ],
              ),
            )
            .toList(),
      ),
    );
  }
}
```
<br/>

## controller 없이 자동으로 controller 주입하는 방법 'DefaultTabController'
```dart
  @override
  Widget build(BuildContext context) {
    // Tabbar 쓰면 컨트롤러 넣어줘야하지만 ! 컨트롤러 주입하지 않고도 사용할 수 있는 방법
    return DefaultTabController( // 컨트롤러 없이 자동으로 컨트롤러 주입
      length: TABS.length, // 탭의 전체길이
      child: Scaffold(
        appBar: AppBar(
          title: Text('BasicAppbarTabbarScreen'),
          bottom: TabBar(
            indicatorColor: Colors.red,
            indicatorWeight: 4.0,
            indicatorSize: TabBarIndicatorSize.tab, // label - 레이블 크기 만큼만 tab- 탭사이즈 만큼
            isScrollable: true, // 탭이 길어졌을 때 탭 메뉴 스크롤 가능
            labelColor: Colors.yellow,
            unselectedLabelColor: Colors.black,
            labelStyle: TextStyle(
              fontWeight: FontWeight.w700
            ),
            unselectedLabelStyle: TextStyle(
                fontWeight: FontWeight.w100
            ),
            tabs: TABS
                .map(
                  (e) => Tab(
                    icon: Icon(e.icon),
                    child: Text(e.label),
                  ),
                )
                .toList(),
          ),
        ),
        body: TabBarView(
          physics: NeverScrollableScrollPhysics(), // 넘기는 것 막기
          // 위젯들을 탭별로 하나씩 넣어줄 수 있음.
          children: TABS
              .map(
                (e) => Center(
                  child: Icon(
                    e.icon,
                  ),
                ),
              )
              .toList(),
        ),
      ),
    );
  }
```

### tabs 파일
```dart
class TabInfo {
  final IconData icon;
  final String label;

  const TabInfo({
    required this.icon,
    required this.label,
  });
}

const TABS = [
  TabInfo(
    icon: Icons.account_balance_outlined,
    label: '지갑',
  ),
  TabInfo(
    icon: Icons.alarm_add_outlined,
    label: '알람',
  ),
  TabInfo(
    icon: Icons.keyboard,
    label: '키보드',
  ),
  TabInfo(
    icon: Icons.ac_unit,
    label: '온도',
  ),
  TabInfo(
    icon: Icons.adb,
    label: '안드로이드',
  ),
];
```