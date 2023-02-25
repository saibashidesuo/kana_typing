import {
  addDakutenTo,
  addHanDakutenTo,
  canAddDakutenTo,
  canAddHanDakutenTo,
  isAddedDakutenTo,
  isAddedHandakutenTo,
  isDakutenCode,
  isHanDakutenCode,
  isNotKanaAndDakutenAndHandakutenCode,
  kanaFrom,
} from './correspondence';

describe('仮名', () => {
  describe('kanaFrom', () => {
    test('適切な仮名が取得できるかどうか', () => {
      expect(kanaFrom('Digit1')).toBe('ぬ');
    });
    test('コードに該当する仮名が存在しない際_undefinedが返されること', () => {
      expect(kanaFrom('not found')).toBe(undefined);
    });
  });
});

describe('濁点関連', () => {
  describe('isDakutenCode', () => {
    test('濁点のコードを与えた場合、trueを返すこと', () => {
      expect(isDakutenCode('BracketLeft')).toBeTruthy();
    });
    test('濁点のコード、もしくはコードでない文字列を与えた場合、falseが返ること', () => {
      expect(isDakutenCode('Digit1')).toBeFalsy();
      expect(isDakutenCode('BracketRight')).toBeFalsy();
      expect(isDakutenCode('test')).toBeFalsy();
    });
  });

  describe('canAddDakutenTo', () => {
    test('濁点を付けることができる仮名を与えられた場合_trueを返すこと', () => {
      expect(canAddDakutenTo('か')).toBeTruthy();
    });
    test('濁点を付けることができない仮名, もしくは仮名以外のものを与えられた場合、falseを返すこと', () => {
      expect(canAddDakutenTo('あ')).toBeFalsy();
      expect(canAddDakutenTo('___')).toBeFalsy();
    });
  });

  describe('addDakutenTo', () => {
    test('濁点を付けることができる仮名を与えられた場合、濁点を付けられた仮名が返ること', () => {
      expect(addDakutenTo('か')).toBe('が');
    });
    test('濁点を付けることができない仮名, もしくは仮名以外を与えられた場合、エラーが送出されること', () => {
      expect(() => {
        addDakutenTo('あ');
      }).toThrow();
      expect(() => {
        addDakutenTo('_');
      }).toThrow();
    });
  });

  describe('isAddedDakutenTo', () => {
    test('濁点がついている仮名が与えられた場合、trueを返すこと', () => {
      expect(isAddedDakutenTo('が')).toBeTruthy();
    });
    test('濁点がついていない仮名、もしくは仮名以外が与えられた場合、falseを返すこと', () => {
      expect(isAddedDakutenTo('あ')).toBeFalsy();
      expect(isAddedDakutenTo('_')).toBeFalsy();
    });
  });
});

describe('半濁点関連', () => {
  describe('isDakutenCode', () => {
    test('半濁点のコードを与えた場合、trueを返すこと', () => {
      expect(isHanDakutenCode('BracketRight')).toBeTruthy();
    });
    test('半濁点のコード、もしくはコードでない文字列を与えた場合、falseが返ること', () => {
      expect(isHanDakutenCode('Digit1')).toBeFalsy();
      expect(isHanDakutenCode('BracketLeft')).toBeFalsy();
      expect(isHanDakutenCode('test')).toBeFalsy();
    });
  });

  describe('canAddHandakutenTo', () => {
    test('半濁点を付けられる仮名を与えた場合、trueが返ること', () => {
      expect(canAddHanDakutenTo('は')).toBeTruthy();
    });
    test('半濁点を付けられない仮名、もしくは仮名以外が与えられた場合、falseを返すこと', () => {
      expect(canAddHanDakutenTo('た')).toBeFalsy();
      expect(canAddHanDakutenTo('_')).toBeFalsy();
    });
  });

  describe('addHandakutenTo', () => {
    test('半濁点を付けられる仮名を与えた場合、半濁点付きの仮名を返すこと', () => {
      expect(addHanDakutenTo('は')).toBe('ぱ');
    });
    test('半濁点を付けられない仮名、もしくは仮名以外が与えられた場合、エラーが送出されること', () => {
      expect(() => {
        addHanDakutenTo('あ');
      }).toThrow();
      expect(() => {
        addHanDakutenTo('_');
      }).toThrow();
    });
  });

  describe('isAddedHandakutenTo', () => {
    test('半濁点付の仮名を与えた場合、trueが返ること', () => {
      expect(isAddedHandakutenTo('ぱ')).toBeTruthy();
    });
    test('半濁点付でない仮名、もしくは仮名以外を与えた場合、falseが返ること', () => {
      expect(isAddedHandakutenTo('あ')).toBeFalsy();
      expect(isAddedHandakutenTo('_')).toBeFalsy();
    });
  });
});

describe('仮名・濁点・半濁点全て関連', () => {
  describe('isNotKanaAndDakutenAndHandakutenCode', () => {
    test('仮名・半濁点・濁点のコードを与えた場合、falseが返ること', () => {
      expect(isNotKanaAndDakutenAndHandakutenCode('Digit1')).toBeFalsy();
      expect(isNotKanaAndDakutenAndHandakutenCode('BracketLeft')).toBeFalsy();
      expect(isNotKanaAndDakutenAndHandakutenCode('BracketRight')).toBeFalsy();
    });
    test('仮名・半濁点・濁点のコード以外を与えた場合、trueが返ること', () => {
      expect(isNotKanaAndDakutenAndHandakutenCode('test')).toBeTruthy();
    });
  });
});
