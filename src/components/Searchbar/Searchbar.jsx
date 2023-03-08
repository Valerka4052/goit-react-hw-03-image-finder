import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Header, Form, Button, ButtonLabel, Field } from './Searchbar.styled';

import { ReactComponent as SearchIcon } from "../../icons/search.svg";

export class SearchBar extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
    };

    getValue = (initialValues) => {
        const search = initialValues.searchQuerry.trim();
            this.props.onSearch(search);
    };

  render()  {
const validationSchema = Yup.object({
            searchQuerry: Yup.string(),
});
      return (
          <Header>
              <Formik
                  initialValues={{ searchQuerry: '' }}
                  onSubmit={(value) => this.getValue(value)}
                  validationSchema={validationSchema}
              >
                  <Form>
                      <Button type="submit">
                          <SearchIcon width={20} height={20} />
                          <ButtonLabel ></ButtonLabel>
                      </Button>
                      <Field
                          name="searchQuerry"
                          type="text"
                          autoComplete="off"
                          autoFocus
                          placeholder="Search images and photos" />
                  </Form>
              </Formik>
          </Header>
      );
    };
};