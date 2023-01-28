export default {
  'GET /api/genders': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {
        id: 1,
        name: 'Fiction',
        subgenders: {
          id: 1,
          name: 'Science Fiction Novels',
        },
      },
      errorCode: 0,
    });
  },
};
