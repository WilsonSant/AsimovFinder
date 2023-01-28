export default {
  'GET /api/publisher': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {
        name: 'Doubleday',
        id: 1,
      },
      errorCode: 0,
    });
  },
};
