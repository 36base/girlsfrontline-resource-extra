import gfextradata from './index';

const { getScript } = gfextradata({ locale: 'ko-KR' });

describe('getScript', () => {
  test('Without SkinCode', () => {
    expect(getScript('MG4')).toBeTruthy();
  });

  test('Check Script for Skin is diff with original Script', () => {
    expect(getScript('G36')).not.toBe(getScript('G36', 900));
  });
});
