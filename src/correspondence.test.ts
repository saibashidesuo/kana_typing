import {
  addDakutenTo,
  addHanDakutenTo,
  canAddDakutenTo,
  canAddHanDakutenTo,
  isAddedDakutenTo,
  isAddedHandakutenTo,
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
    test('半濁点付でない仮名、もしくは仮名以外が与えられた場合、falseが返ること', () => {
      expect(isAddedHandakutenTo('あ')).toBeFalsy();
      expect(isAddedHandakutenTo('_')).toBeFalsy();
    });
  });
});
