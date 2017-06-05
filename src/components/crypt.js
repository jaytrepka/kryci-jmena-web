function getCodedString(string) {
  switch(string) {
    case '000':
      return 'A';
     case '001':
      return 'B';
     case '002':
      return 'C';
     case '003':
      return 'D';
     case '010':
      return 'E';
     case '011':
      return 'F';
     case '012':
      return 'G';
     case '013':
      return 'H';
     case '020':
      return 'I';
     case '021':
      return 'J';
     case '022':
      return 'K';
     case '023':
      return 'L';
     case '030':
      return 'M';
     case '031':
      return 'N';
     case '032':
      return 'O';
    case '100':
      return 'P';
    case '101':
      return 'Q';
    case '102':
      return 'R';
    case '103':
      return 'S';
    case '110':
      return 'T';
    case '111':
      return 'U';
    case '112':
      return 'V';
    case '113':
      return 'W';
    case '120':
      return 'X';
    case '121':
      return 'Y';
    case '122':
      return 'Z';
    case '123':
      return 'a';
    case '130':
      return 'b';
    case '131':
      return 'c';
    case '132':
      return 'd';
    case '200':
      return 'e';
    case '201':
      return 'f';
    case '202':
      return 'g';
    case '203':
      return 'h';
    case '210':
      return 'i';
    case '211':
      return 'j';
    case '212':
      return 'k';
    case '213':
      return 'l';
    case '220':
      return 'm';
    case '221':
      return 'n';
    case '222':
      return 'o';
    case '223':
      return 'p';
    case '230':
      return 'q';
    case '231':
      return 'r';
    case '232':
      return 's';
    case '300':
      return 't';
    case '301':
      return 'u';
    case '302':
      return 'v';
    case '310':
      return 'w';
    case '311':
      return 'x';
    case '312':
      return 'y';
    case '320':
      return 'z';
    case '321':
      return '1';
    case '322':
      return '2';
  }
}

function getDecodedString(string) {
  switch(string) {
    case  'A':
      return '000';
     case 'B':
      return '001';
     case 'C':
      return '002';
     case 'D':
      return '003';
     case 'E':
      return '010';
     case 'F':
      return '011';
     case 'G':
      return '012';
     case 'H':
      return '013';
     case 'I':
      return '020';
     case 'J':
      return '021';
     case 'K':
      return '022';
     case 'L':
      return '023';
     case 'M':
      return '030';
     case 'N':
      return '031';
     case 'O':
      return '032';
    case 'P':
      return '100';
    case 'Q':
      return '101';
    case 'R':
      return '102';
    case 'S':
      return '103';
    case 'T':
      return '110';
    case 'U':
      return '111';
    case 'V':
      return '112';
    case 'W':
      return '113';
    case 'X':
      return '120';
    case 'Y':
      return '121';
    case 'Z':
      return '122';
    case 'a':
      return '123';
    case 'b':
      return '130';
    case 'c':
      return '131';
    case 'd':
      return '132';
    case 'e':
      return '200';
    case 'f':
      return '201';
    case 'g':
      return '202';
    case 'h':
      return '203';
    case 'i':
      return '210';
    case 'j':
      return '211';
    case 'k':
      return '212';
    case 'l':
      return '213';
    case 'm':
      return '220';
    case 'n':
      return '221';
    case 'o':
      return '222';
    case 'p':
      return '223';
    case 'q':
      return '230';
    case 'r':
      return '231';
    case 's':
      return '232';
    case 't':
      return '300';
    case 'u':
      return '301';
    case 'v':
      return '302';
    case 'w':
      return '310';
    case 'x':
      return '311';
    case 'y':
      return '312';
    case 'z':
      return '320';
    case '1':
      return '321';
    case '2':
      return '322';
  }
}

export function encode(string) {
  const parts = string.match(/.{1,3}/g);
  let result = '';
  for (let i = 0; i < 8; i++) {
    result = result + getCodedString(parts[i]);
  }
  result = result + String(Number(parts[8]) + 4);
  return result;
}

export function decode(string) {
  const parts = string.match(/.{1}/g);
  let result = '';
  for (let i = 0; i < 8; i++) {
    result = result + getDecodedString(parts[i]);
  }
  result = result + String(Number(parts[8]) - 4);
  return result;
}
