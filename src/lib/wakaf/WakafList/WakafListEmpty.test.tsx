import { screen } from '@testing-library/react-native';
import React from 'react';
import { renderWithUtils } from '../../../common/utils';
import WakafListEmpty from './WakafListEmpty';

describe('Unit Test WakafListEmpty.tsx ', () => {
  it('should render component correcty', () => {
    renderWithUtils(<WakafListEmpty searchQuery="" />);

    const tree = screen.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should display 'Tap tombol tambahkan aset untuk menambahkan data' when empty search query given", () => {
    renderWithUtils(<WakafListEmpty searchQuery="" />);

    expect(
      screen.getByText('Tap tombol tambahkan aset untuk menambahkan data'),
    ).toBeTruthy();
  });

  it("should display 'Pencarian dengan kata kunci 'masjid' tidak menemukan apapun' when 'masjid' search query given", () => {
    renderWithUtils(<WakafListEmpty searchQuery="masjid" />);

    expect(
      screen.getByText(
        'Pencarian dengan kata kunci "masjid" tidak menemukan apapun',
      ),
    ).toBeTruthy();
  });
});
