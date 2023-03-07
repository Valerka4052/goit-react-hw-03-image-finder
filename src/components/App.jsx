import { Component } from 'react';
import { getApi } from './api'
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import Notiflix from 'notiflix';

export class App extends Component{
  state = {
    pictures: [],
    searchQuerry: '',
    page: 1,
    largeImage: "",
    showModal: false,
    loading: false,
    lastPage: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, searchQuerry} = this.state;
      if (page !== prevState.page && searchQuerry === prevState.searchQuerry) {
        this.toggleLoading();
        getApi(searchQuerry, page).then((array) => {
          if (array.length < 12) { this.setState({ lastPage: true }) };
          this.setState(prevState => { return { pictures: [...prevState.pictures, ...array] } });
        }).finally(this.toggleLoading());
    } else if (searchQuerry !== prevState.searchQuerry) {
      this.toggleLoading();
        getApi(searchQuerry, page).then((array) => {
          if (array.length < 12 && array.length > 0) {
            this.setState({ lastPage: true })
          };
          if (array.length) {
            this.setState({ pictures: array })
          } else {
            Notiflix.Notify.failure('Please enter valid search querry');
            this.setState({ pictures: [] })
          };
      }).finally(this.toggleLoading());
    };
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  };

  getLargeImage = (e) => {
    this.setState({ largeImage: e.target.id });
    if(e.target.nodeName==='IMG'){
      this.toggleModal();
    };
  };

  searchQuerryToState = (value) => {
    if (value === '') {
      this.setState({ pictures: [] });
      Notiflix.Notify.warning('Please enter the search querry');
      return
    }
    this.setState({
      searchQuerry: value,
      page: 1
    });
  };

  loadMore = () => {
    this.setState(({ page }) => { return { page: page + 1 } });
  };
  
  
  render() {

    const {toggleModal, searchQuerryToState, loadMore, getLargeImage, state: {lastPage, pictures, largeImage, showModal, loading } } = this;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px'
        }}
      >
        <SearchBar onSearch={searchQuerryToState} />
        <ImageGallery array={pictures}
          getLargeImage={getLargeImage} />
        {loading && <Loader />}
        {!loading && pictures.length > 0 && !lastPage && <Button loadMore={loadMore} />}
        {showModal && <Modal
          LargeImage={largeImage}
          toggleModal={toggleModal}
        />}
      </div>
    );
  };
};


