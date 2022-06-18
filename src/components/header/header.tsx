import { ApplicationStorageConsumer } from '../../common/context'
import { Component } from '../../common/modules/component'
import styles from './.module.css'

export class Header extends Component {
    render () {

        return (
            <ApplicationStorageConsumer>
                {(context: any) => 
                    <header onClick={() => 
                        context.update({ loginPopUp: !context.loginPopUp })
                    } className={styles.header} >
                        <h1 className={styles.headerSign} >{context.appName}</h1>
                    </header>}
            </ApplicationStorageConsumer>
        )
    }
}