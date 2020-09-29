import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Switch from "react-switch";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import {CheckOutlined} from '@ant-design/icons';

const currency = 'EUR';

const language = "pt-PT";

const plans = [
    {
        type: 'Free',
        detail: 'Plano standard com limitações',
        tiers: []
    },
    {
        type: 'Standard',
        detail: 'Plano standard',
        tiers: [
            {
                limit: 2,
                price: 29.90,
            },
            {
                limit: 5,
                price: 59.80,
            },
            {
                limit: 10,
                price: 119.60,
            },
            {
                limit: 0,
                price: 199.90,
            },
        ]
    },
    {
        type: 'Premium',
        detail: 'Plano premium',
        tiers: [
            {
                limit: 2,
                price: 49.9,
            },
            {
                limit: 5,
                price: 99.8,
            },
            {
                limit: 10,
                price: 199.6,
            },
            {
                limit: 0,
                price: 299.90,
            },
        ]
    }
];

const features = [
  {
    title: 'Criar orçamento',
    detail: 'Criar orçamento',
    plan: 0,
  },
  {
    title: 'Editar orçamento',
    detail: 'Editar orçamento',
    plan: 1,
  },
  {
    title: 'Apagar orçamento',
    detail: 'Apagar orçamento',
    plan: 2,
  },
  ,
  {
    title: 'Visualizar orçamento',
    detail: 'Visualizar orçamento',
    plan: 0,
  },
];

function Badge({description, checked}) {

  const spec = !checked ? "badge badge--primary" : "badge badge--secondary";

  return (
    <span class={spec}>{description}</span>
  );
}

function Plan({users, plan, isPerYear}) {
  
    if(!users) users = 1;

    let tier = plan.tiers.find(tier => users <= tier.limit || tier.limit == 0);

    function FormatPrice(price) {
      return price.toLocaleString(language, {style: "currency", currency: currency, maximumFractionDigits: 2});
    }

    function FormatPlan({price, usersLimit, detail, button}) {
      return (
        <div className={clsx('col', styles.plan)}>
          <h2 className={styles.underline}>{plan.type}</h2>
          <h1>{price}</h1>
          <div className='container'>
            <div className='col'>
              <p className={styles.planPrice}>{usersLimit}</p>
              <p className={styles.planOffer}>{detail}</p>
            </div>
          </div>
          {button}
        </div>
      )
    }

    if(plan.tiers.length < 1)
      return <FormatPlan 
                price='0 €'
                usersLimit='Até 2 utilizadores' 
                detail='Oferta limitada'
                button={<button className={clsx("button button--primary", styles.planButton)}>Download</button>}
             />;

    var usersLimit = tier.limit == 0 ? 'Utilizadores ilimitados' : 'Até ' + tier.limit + ' utilizadores';

    if(isPerYear)
      return <FormatPlan 
                price={FormatPrice(tier.price * 12 * 0.8)}
                usersLimit={usersLimit} 
                detail='20% desconto'
                button={<button className={clsx("button button--secondary", styles.planButton)}>Registar</button>}
              />
    else 
      return <FormatPlan 
                price={FormatPrice(tier.price)}
                usersLimit={usersLimit} 
                detail={FormatPrice(tier.price * 12) + ' / ano'}
                button={<button className={clsx("button button--secondary", styles.planButton)}>Registar</button>}
             />

}

class Price extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: 1, isPerYear: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleChange(isPerYear) {
      this.setState({ isPerYear });
    }

    handleInputChange(event) {
      const users = (event.target.validity.valid) ? event.target.value : this.state.users;
      this.setState({users: users});
    }

    render() {
      return (
        <div className={clsx('container', styles.form)}>
            <div className={clsx('row', styles.users)}>
                <div className={styles.usersLabel}>       
                  Quantos utilizadores?
                </div>
                <input 
                    className={styles.input}
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.users}
                    pattern="^[1-9][0-9]{0,3}"
                />
            </div>
            <div className={clsx('row', styles.billingCycle)}>
              <Badge description={'Mensal'} checked={this.state.isPerYear}/>
              <Switch
                onChange={this.handleChange}
                checked={this.state.isPerYear}
                uncheckedIcon={false}
                checkedIcon={false}
                className={styles.toggle}
                onColor='#1daeac'
                offColor='#1daeac'
                height={25}
                width={50}
                handleDiameter={10}
              />
              <Badge description={'Anual'} checked={!this.state.isPerYear}/>
            </div>
            <div className={clsx('row', styles.plans)}>
              <div className='col'/>
              {plans && plans.length > 0 && (
                plans.map((props, idx) => (
                    <Plan 
                      key={idx} 
                      users={this.state.users} 
                      plan={props} 
                      isPerYear={this.state.isPerYear}
                    />
                  ))
                )}
            </div>
          </div>  
        );
    }
}

function Feature({title, detail, plan}) {

  function CheckPlan({planValue, planSelected}) {
    if(planValue <= planSelected)
      return <CheckOutlined />;
    else
      return <span>-</span>;
  }

  return (
    <div className={clsx('row', styles.feature)}>
      <div className={clsx('col', styles.featureName)}>
        {title}
      </div>
      <div className={clsx('col', styles.featureCol)}>
        <span className={styles.featureDescription}>Free</span>
        <CheckPlan planValue={plan} planSelected={0} />
      </div>
      <div className={clsx('col', styles.featureCol)}>
        <span className={styles.featureDescription}>Standard</span> 
        <CheckPlan planValue={plan} planSelected={1} />
      </div>
      <div className={clsx('col', styles.featureCol)}>
        <span className={styles.featureDescription}>Premium</span>
        <CheckPlan planValue={plan} planSelected={2} />
      </div>

    </div>
  );
}

function Features() {
  return (
    <div className={clsx('container', styles.features)}>
      <div className={clsx('row', styles.featureHeader)}>
        Funcionalidades
      </div>
      {features.map((props, idx) => (
          <Feature key={idx} {...props} />
      ))}
    </div>
  );
}

function Pricing() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Preços`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Planos e Preços</h1>
        </div>
      </header>
      <main>
        <Price/>
        <Features />
      </main>
    </Layout>
  );
}

export default Pricing;
