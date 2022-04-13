import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Menu } from 'semantic-ui-react';
import NewRouterStore from '../../mobx/router.store';
import { endpoints } from "../../routes/endpoints";

interface Props {
    router?: NewRouterStore;
}

@inject('router')
@observer
export default class MainMenu extends React.Component<Props>{

    handleItemClick = (_, { url }: any) =>{

        const { setHistory } = this.props.router!;
        return setHistory(url);
    }

    render() {
        return (
          <>
            <div className='nav'>
              <Menu color='blue' inverted={true} size='large' secondary={true} stackable={true}>
                {endpoints.filter(x => x.name).map((item, index) => {
                  return <Menu.Item
                    key={index}
                    name={item.path?.toString()}
                    url={item.path!}
                    onClick={this.handleItemClick}>
                    {item.name}
                  </Menu.Item>
                })}
              </Menu>
            </div>
          </>
        )
      }
}
  
