exports.genSidebarConfig = function (title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '01 - あの黒い画面恐怖症',
                '02 - YAML語の住人'
            ]
        }
    ]
}
