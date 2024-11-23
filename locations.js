const locations = [
    '서울특별시 성동구 마장로 292',
    '서울특별시 성동구 마조로 77',
    '서울특별시 성동구 행당동 33-13',
    '서울특별시 성동구 광나루로 230',
    '서울특별시 성동구 동일로 95',
    '서울특별시 성동구 왕십리로 94-1',
    '서울특별시 성동구 아차산로 85',
    '서울특별시 성동구 성수동2가 300-85',
    '서울특별시 성동구 성수동2가 315-1',
    '서울특별시 성동구 천호대로 308',
    '서울특별시 성동구 천호대로 376',
    '서울특별시 성동구 천호대로 426',
    '서울특별시 성동구 천호대로 380-7',
    '서울특별시 성동구 천호대로 400',
    '서울특별시 성동구 자동차시장1길 63',
    '서울특별시 성동구 자동차시장1길 73',
    '서울특별시 성동구 고산자로 164',
    '서울특별시 성동구 행당로6길 2',
    '서울특별시 성동구 금호로 86',
    '서울특별시 성동구 금호로 107',
    '서울특별시 성동구 난계로 84',
    '서울특별시 성동구 장터길 46',
    '서울특별시 성동구 금호동4가 1450',
    '서울특별시 성동구 매봉길 50',
    '서울특별시 성동구 독서당로 211',
    '서울특별시 성동구 독서당로 187',
    '서울특별시 성동구 금호로 173',
    '서울특별시 성동구 고산자로 269',
    '서울특별시 성동구 성수동1가 685-30',
    '서울특별시 성동구 광나루로 290',
    '서울특별시 성동구 마조로 77',
    '서울특별시 성동구 마조로 77',
    '서울특별시 성동구 왕십리로 216',
    '서울특별시 성동구 마장로 292',
    '서울특별시 성동구 마장로 292',
    '서울특별시 성동구 왕십리로 50',
    '서울특별시 성동구 무학로 8-1',
    '서울특별시 성동구 왕십리로 332',
    '서울특별시 성동구 고산자로 269',
    '서울특별시 성동구 고산자로 341-1',
    '서울특별시 성동구 고산자로 354',
    '서울특별시 성동구 고산자로 354',
    '서울특별시 성동구 마장로 305',
    '서울특별시 성동구 고산자로 280',
    '서울특별시 성동구 고산자로 280',
    '서울특별시 성동구 고산자로 164',
    '서울특별시 성동구 난계로 84',
    '서울특별시 성동구 금호동2가 1217',
    '서울특별시 성동구 동호로 93',
    '서울특별시 성동구 장터길 46',
    '서울특별시 성동구 독서당로 207',
    '서울특별시 성동구 독서당로 187',
    '서울특별시 성동구 독서당로39길 43-1',
    '서울특별시 성동구 독서당로 230',
    '서울특별시 성동구 독서당로 230',
    '서울특별시 성동구 독서당로 274',
    '서울특별시 성동구 독서당로 274',
    '서울특별시 성동구 금호로 173',
    '서울특별시 성동구 금호로 173',
    '서울특별시 성동구 장터길 49-1',
    '서울특별시 성동구 장터길 49-1',
    '서울특별시 성동구 행당로6길 97',
    '서울특별시 성동구 행당로6길 97',
    '서울특별시 성동구 성수동1가 656-1985',
    '서울특별시 성동구 성수동1가 685-580',
    '서울특별시 성동구 성수동1가 685-580',
    '서울특별시 성동구 아차산로 6',
    '서울특별시 성동구 성수동1가 671-357',
    '서울특별시 성동구 성수동1가 671-357',
    '서울특별시 성동구 성수동1가 2-10',
    '서울특별시 성동구 성수동1가 2-10',
    '서울특별시 성동구 광나루로2길 1',
    '서울특별시 성동구 광나루로2길 1',
    '서울특별시 성동구 뚝섬로13길 14',
    '서울특별시 성동구 뚝섬로13길 14',
    '서울특별시 성동구 뚝섬로 379',
    '서울특별시 성동구 왕십리로 50',
    '서울특별시 성동구 아차산로 97',
    '서울특별시 성동구 성수동2가 277-56',
    '서울특별시 성동구 성수동1가 16-4',
    '서울특별시 성동구 성수동1가 683',
    '서울특별시 성동구 천호대로 232',
    '서울특별시 성동구 천호대로 342',
    '서울특별시 성동구 동일로 265',
    '서울특별시 성동구 동일로 205',
    '서울특별시 성동구 광나루로 307',
    '서울특별시 성동구 광나루로 230',
    '서울특별시 성동구 광나루로 290',
    '서울특별시 성동구 동일로 97',
    '서울특별시 성동구 천호대로 304',
    '서울특별시 성동구 천호대로 304',
    '서울특별시 성동구 천호대로 432',
    '서울특별시 성동구 천호대로 432',
    '서울특별시 성동구 동일로 185',
    '서울특별시 성동구 동일로 185',
    '서울특별시 성동구 광나루로 297',
    '서울특별시 성동구 광나루로 297',
    '서울특별시 성동구 성수이로 118',
    '서울특별시 성동구 성수이로 118',
    '서울특별시 성동구 천호대로 380-7',
    '서울특별시 성동구 천호대로 400',
    '서울특별시 성동구 천호대로 420'
];
