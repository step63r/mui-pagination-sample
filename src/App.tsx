import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';

type Student = {
  id: number,
  name: string,
  birthday: Date | null,
  bloodType: string | null,
  height: number | null,
  BWH: {
    B: number,
    W: number,
    H: number,
  } | null,
}

const rowsPerPage = 10;

const students: Student[] = [
  {
    id: 1,
    name: '相坂 さよ',
    birthday: null,
    bloodType: null,
    height: 149,
    BWH: { B: 77, W: 56, H: 79 }
  },
  {
    id: 2,
    name: '明石 裕奈',
    birthday: new Date(1988, 6, 1),
    bloodType: 'A',
    height: 161,
    BWH: { B: 84, W: 58, H: 84 }
  },
  {
    id: 3,
    name: '朝倉 和美',
    birthday: new Date(1989, 1, 10),
    bloodType: 'O',
    height: 167,
    BWH: { B: 88, W: 60, H: 86 }
  },
  {
    id: 4,
    name: '綾瀬 夕映',
    birthday: new Date(1988, 11, 16),
    bloodType: 'AB',
    height: 138,
    BWH: { B: 66, W: 49, H: 66 }
  },
  {
    id: 5,
    name: '和泉 亜子',
    birthday: new Date(1988, 11, 21),
    bloodType: 'A',
    height: 148,
    BWH: { B: 75, W: 54, H: 76 }
  },
  {
    id: 6,
    name: '大河内 アキラ',
    birthday: new Date(1988, 5, 26),
    bloodType: 'AB',
    height: 175,
    BWH: { B: 86, W: 57, H: 83 }
  },
  {
    id: 7,
    name: '柿崎 美砂',
    birthday: new Date(1988, 5, 15),
    bloodType: 'O',
    height: 165,
    BWH: { B: 82, W: 58, H: 84 }
  },
  {
    id: 8,
    name: '神楽坂 明日菜',
    birthday: new Date(1988, 4, 21),
    bloodType: 'B',
    height: 163,
    BWH: { B: 83, W: 57, H: 84 }
  },
  {
    id: 9,
    name: '春日 美空',
    birthday: new Date(1988, 4, 4),
    bloodType: 'A',
    height: 162,
    BWH: { B: 78, W: 57, H: 78 }
  },
  {
    id: 10,
    name: '絡繰 茶々丸',
    birthday: new Date(2001, 1, 3),
    bloodType: null,
    height: 174,
    BWH: { B: 84, W: 60, H: 84 }
  },
  {
    id: 11,
    name: '釘宮 円',
    birthday: new Date(1989, 3, 3),
    bloodType: 'AB',
    height: 160,
    BWH: { B: 81, W: 56, H: 81 }
  },
  {
    id: 12,
    name: '古菲',
    birthday: new Date(1989, 3, 16),
    bloodType: 'A',
    height: 151,
    BWH: { B: 78, W: 56, H: 80 }
  },
  {
    id: 13,
    name: '近衛 木乃香',
    birthday: new Date(1988, 3, 18),
    bloodType: 'AB',
    height: 152,
    BWH: { B: 73, W: 54, H: 76 }
  },
  {
    id: 14,
    name: '早乙女 ハルナ',
    birthday: new Date(1988, 8, 18),
    bloodType: 'B',
    height: 162,
    BWH: { B: 87, W: 67, H: 88 }
  },
  {
    id: 15,
    name: '桜咲 刹那',
    birthday: new Date(1989, 1, 17),
    bloodType: 'A',
    height: 151,
    BWH: { B: 71, W: 52, H: 74 }
  },
  {
    id: 16,
    name: '佐々木 まき絵',
    birthday: new Date(1989, 3, 7),
    bloodType: 'O',
    height: 152,
    BWH: { B: 72, W: 53, H: 75 }
  },
  {
    id: 17,
    name: '椎名 桜子',
    birthday: new Date(1988, 6, 9),
    bloodType: 'B',
    height: 164,
    BWH: { B: 83, W: 56, H: 79 }
  },
  {
    id: 18,
    name: '龍宮 真名',
    birthday: new Date(1988, 11, 17),
    bloodType: 'A',
    height: 184,
    BWH: { B: 88.9, W: 69, H: 88 }
  },
  {
    id: 19,
    name: '超 鈴音',
    birthday: new Date(1988, 12, 1),
    bloodType: 'O',
    height: 160,
    BWH: { B: 77, W: 56, H: 78 }
  },
  {
    id: 20,
    name: '長瀬 楓',
    birthday: new Date(1988, 11, 12),
    bloodType: 'O',
    height: 181,
    BWH: { B: 89, W: 69, H: 86 }
  },
  {
    id: 21,
    name: '那波 千鶴',
    birthday: new Date(1989, 1, 29),
    bloodType: 'A',
    height: 172,
    BWH: { B: 94, W: 63, H: 89 }
  },
  {
    id: 22,
    name: '鳴滝 風香',
    birthday: new Date(1988, 12, 6),
    bloodType: 'A',
    height: 128,
    BWH: { B: 62, W: 46, H: 55 }
  },
  {
    id: 23,
    name: '鳴滝 史伽',
    birthday: new Date(1988, 12, 6),
    bloodType: 'A',
    height: 128,
    BWH: { B: 62, W: 46, H: 55 }
  },
  {
    id: 24,
    name: '葉加瀬 聡美',
    birthday: new Date(1988, 7, 14),
    bloodType: 'B',
    height: 145,
    BWH: { B: 74, W: 54, H: 76 }
  },
  {
    id: 25,
    name: '長谷川 千雨',
    birthday: new Date(1989, 2, 2),
    bloodType: 'B',
    height: 162,
    BWH: { B: 82, W: 57, H: 78 }
  },
  {
    id: 26,
    name: 'エヴァンジェリン・アタナシア・キティ・マクダウェル',
    birthday: null,
    bloodType: null,
    height: 130,
    BWH: { B: 67, W: 48, H: 63 }
  },
  {
    id: 27,
    name: '宮崎 のどか',
    birthday: new Date(1988, 5, 10),
    bloodType: 'O',
    height: 153,
    BWH: { B: 78, W: 58, H: 79 }
  },
  {
    id: 28,
    name: '村上 夏美',
    birthday: new Date(1988, 10, 21),
    bloodType: 'A',
    height: 151,
    BWH: { B: 74, W: 54, H: 79 }
  },
  {
    id: 29,
    name: '雪広 あやか',
    birthday: new Date(1988, 7, 5),
    bloodType: 'O',
    height: 173,
    BWH: { B: 85, W: 54, H: 83 }
  },
  {
    id: 30,
    name: '四葉 五月',
    birthday: new Date(1988, 5, 12),
    bloodType: 'A',
    height: 156,
    BWH: { B: 86, W: 76, H: 87 }
  },
  {
    id: 31,
    name: 'ザジ・レイニーデイ',
    birthday: new Date(1989, 3, 17),
    bloodType: 'B',
    height: 151,
    BWH: { B: 77, W: 51, H: 75 }
  },
]

const getDateFormatString = (date: Date) => {
  const y = date.getFullYear();
  const m = ('00' + (date.getMonth() + 1)).slice(-2);
  const d = ('00' + date.getDate()).slice(-2);
  return `${y}/${m}/${d}`;
}

const App = () => {
  const [page, setPage] = useState(0);

  const handleOnChangePage = (page: number) => {
    setPage(page);
  }

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>出席番号</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>生年月日</TableCell>
              <TableCell>血液型</TableCell>
              <TableCell>身長</TableCell>
              <TableCell>B/W/H</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(student => (
                <TableRow key={student.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.birthday === null ? '-' : getDateFormatString(student.birthday)}</TableCell>
                  <TableCell>{student.bloodType ?? '-'}</TableCell>
                  <TableCell>{student.height ?? '-'}</TableCell>
                  <TableCell>{student.BWH === null ? '-' : `${student.BWH.B}/${student.BWH.W}/${student.BWH.H}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination count={students.length} onPageChange={(e, page) => handleOnChangePage(page)} page={page} rowsPerPage={rowsPerPage} rowsPerPageOptions={[10]} />
    </>
  );
}

export default App;
