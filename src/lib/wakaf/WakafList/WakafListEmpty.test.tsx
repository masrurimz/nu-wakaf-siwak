import React from 'react';
import { render, screen } from '@testing-library/react-native';
import WakafListEmpty from './WakafListEmpty';
import { NativeBaseTestWrapper } from '../../../common/utils';

describe('Unit Test WakafListEmpty.tsx ', () => {
  it('should render component correcty', () => {
    const root = render(
      <NativeBaseTestWrapper>
        <WakafListEmpty searchQuery="" />
      </NativeBaseTestWrapper>,
    );
    const tree = root.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should display 'Tap tombol tambahkan aset untuk menambahkan data' when empty search query given", () => {
    render(
      <NativeBaseTestWrapper>
        <WakafListEmpty searchQuery="" />
      </NativeBaseTestWrapper>,
    );

    expect(
      screen.getByText('Tap tombol tambahkan aset untuk menambahkan data'),
    ).toBeTruthy();
  });

  it("should display 'Pencarian dengan kata kunci 'masjid' tidak menemukan apapun' when 'masjid' search query given", () => {
    render(
      <NativeBaseTestWrapper>
        <WakafListEmpty searchQuery="masjid" />
      </NativeBaseTestWrapper>,
    );

    expect(
      screen.getByText(
        'Pencarian dengan kata kunci "masjid" tidak menemukan apapun',
      ),
    ).toBeTruthy();
  });
});
