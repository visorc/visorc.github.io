import React from 'react';

export const currency = 'EUR';
export const language = 'pt-PT';

export const plans = [
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

export const features = [
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
