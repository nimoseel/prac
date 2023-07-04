// 작동 방식은 map과 같지만 true 값만 남기고 false 값은 삭제함
void main() {
  List<Map<String, String>> people = [
    {
      'name': '카리나',
      'group': '에스파',
    },
    {
      'name': '윈터',
      'group': '에스파',
    },
    {
      'name': 'RM',
      'group': 'BTS',
    },
    {
      'name': 'V',
      'group': 'BTS',
    },
  ];

  final aespa = people.where((x) => x['group'] == '에스파');
  final bts = people.where((x) => x['group'] == 'BTS');

  print(aespa); // ({name: 카리나, group: 에스파}, {name: 윈터, group: 에스파})
  print(bts); // ({name: RM, group: BTS}, {name: V, group: BTS})
}
