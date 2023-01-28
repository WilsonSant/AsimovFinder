export default {
  'GET /api/bookList': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {
        id: 1,
        number: 1,
        title: 'Pebble In The Sky',
        publisherId: 1,
        year: 1950,
        asterik: false,
        unnumbered: false,
        gender: {
          id: 1,
          hasSubGender: true,
          subGenderId: 1,
        },
      },
      errorCode: 0,
    });
  },
};
