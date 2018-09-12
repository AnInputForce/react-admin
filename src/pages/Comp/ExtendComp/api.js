class API {
  static getApi = name => {
    let api = '';
    if (name === 'City') {
      api = `
      <City
        columnLayout={3}
        columnIndex={2}
        form={form}
        required
        label="城市"
        field="city"
        cityValues={cityValues}
        onGetCityValues={this.handleGetCityValues}
        initialValue={formValues.city}
      />
`;
      return api;
    }
  };
}

export default API;
