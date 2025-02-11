export const MockVisits = {
  'encounters': [
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'contacts': [
        {
          'ContactLastName': 'Zain',
          'ContactFirstName': 'Doctor',
          'contactRelashionship': 'Other'
        }
      ],
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 428,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000006',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.842297Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-12-09T01:00:00Z',
            'end': '2023-12-09T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-12-09T01:00:00Z',
      'service_end_date': '2023-12-09T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'contacts': [
        {
          'ContactLastName': 'Zain',
          'ContactFirstName': 'Doctor',
          'contactRelashionship': 'Other'
        }
      ],
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 442,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000008',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.870267Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-25T01:00:00Z',
            'end': '2023-11-25T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-25T01:00:00Z',
      'service_end_date': '2023-11-25T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'contacts': [
        {
          'ContactLastName': 'Zain',
          'ContactFirstName': 'Doctor',
          'contactRelashionship': 'Other'
        }
      ],
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 446,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000007',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.854901Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-21T01:00:00Z',
            'end': '2023-11-21T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-21T01:00:00Z',
      'service_end_date': '2023-11-21T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '2222222222',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Client',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'Second',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'contacts': [
        {
          'ContactLastName': 'Zain',
          'ContactFirstName': 'Doctor',
          'contactRelashionship': 'Other'
        }
      ],
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '2222222222',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 457,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000010',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.885225Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-10T00:00:00Z',
            'end': '2023-11-10T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-10T00:00:00Z',
      'service_end_date': '2023-11-10T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 457,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000002',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.813689Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-10T00:00:00Z',
            'end': '2023-11-10T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-10T00:00:00Z',
      'service_end_date': '2023-11-10T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 457,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000003',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.820589Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-10T00:00:00Z',
            'end': '2023-11-10T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-10T00:00:00Z',
      'service_end_date': '2023-11-10T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'contacts': [
        {
          'ContactLastName': 'Zain',
          'ContactFirstName': 'Doctor',
          'contactRelashionship': 'Other'
        }
      ],
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 457,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000009',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.879658Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-10T00:00:00Z',
            'end': '2023-11-10T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [
        {
          'message': 'Client first name is missing',
          'criteria': 'client',
          'lvl': 'warn'
        }
      ],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-10T00:00:00Z',
      'service_end_date': '2023-11-10T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 457,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000001',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.808866Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-10T00:00:00Z',
            'end': '2023-11-10T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-10T00:00:00Z',
      'service_end_date': '2023-11-10T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7200,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'contacts': [
        {
          'ContactLastName': 'Zain',
          'ContactFirstName': 'Doctor',
          'contactRelashionship': 'Other'
        }
      ],
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 458,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000005',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.837444Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7200,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7200,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-09T01:00:00Z',
            'end': '2023-11-09T02:00:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 8,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-09T01:00:00Z',
      'service_end_date': '2023-11-09T02:00:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7200,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    },
    {
      'ch-item-def': {
        'description': 'Attendant care services; per 15 minutes',
        'revcode': '0001',
        'meta': {
          'profile': [
            'urn:fhir:billing:profile:ChargeItemDefinition'
          ],
          'organization': {
            'id': '96010',
            'resourceType': 'Organization'
          },
          'lastUpdated': '2025-02-07T10:43:18.795493Z',
          'createdAt': '2025-02-07T10:43:18.795493Z',
          'versionId': '1604'
        },
        'single-program': 'EPD',
        'effectiveDate': '2023-09-01',
        'resourceType': 'ChargeItemDefinition',
        'payor': {
          'type': 'Organization',
          'identifier': {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        },
        'status': 'active',
        'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
        'code': {
          'coding': [
            {
              'code': 'T1019'
            }
          ]
        },
        'identifier': [
          {
            'value': 'T1019_02',
            'system': 'urn:system:evv:SERVICEKEY'
          }
        ],
        'placeOfService': '99',
        'unitPrice': {
          'value': 5.81,
          'currency': 'USD'
        }
      },
      'member-id': '1234556778',
      'payor-id': 'DHCFP',
      'service': 'T1019_02',
      'client_l_name': 'Doe',
      'billable-hours': 7140,
      'worker_id_custom1': '1245319599',
      'client_dob': '1990-10-09T21:00:00Z',
      'schedule_id': 1601540948,
      'billing_provider_address_line2': 'Loc',
      'unit-calc-entry': {
        'id': '1',
        'payor': 'DHCFP',
        'rule': {
          'each-next': {
            'time': '0:15:00'
          },
          'thresholds': [
            {
              'time': '00:07:00'
            }
          ]
        },
        'ruleid': '1',
        'service': 'T1019',
        'split-shift': 'true'
      },
      'visitkey': 2148660002,
      'client_f_name': 'John',
      'billing_provider_state': 'NY',
      'client_address_line': 'Abc',
      'contacts': [
        {
          'ContactLastName': 'Zain',
          'ContactFirstName': 'Doctor',
          'contactRelashionship': 'Other'
        }
      ],
      'worker_f_name': 'Mister',
      'visit_date': '2023-11-09T21:00:00Z',
      'client_city': 'New York',
      'client_ssn': '456456456',
      'type': 'base-service',
      'resourceType': 'BillingItem',
      'client_medicaid_id': '1234556778',
      'billing_provider_phone': '12345667',
      'member_id': '1234556778',
      'schedule_end_date': '2023-11-10T01:00:00Z',
      'account': '96010',
      'billing_provider_address_line': 'Abc',
      'ch-item-type': 'default',
      'client_id_custom1': '1234556778',
      'elapsed-days': 458,
      'client_zip': '10279-0000',
      'billing_provider_zip': '10279-0000',
      'payor': {
        'name': 'DHCFP',
        'identifier': [
          {
            'value': 'DHCFP',
            'system': 'urn:system:evv:PAYOR_ID'
          }
        ],
        'configuration': {
          'roll-up-rule': 'date-of-service&member-id&service',
          'claim-grouping-rule': 'monthly&member-id&preauth'
        },
        'id': 'DHCFP',
        'resourceType': 'Payor',
        'meta': {
          'lastUpdated': '2025-01-15T12:42:38.587001Z',
          'createdAt': '2025-01-15T12:42:38.587001Z',
          'versionId': '111'
        }
      },
      'status': 'Approved',
      'id': '0000004',
      'billing_provider_taxonomy': '320900000X',
      'billing_provider_city': 'New York',
      'lastUpdated': '2025-02-07T10:43:18.831502Z',
      'service-lines': [
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 7140,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 46.48,
          'raw-units': 7140,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 8,
          'period': {
            'start': '2023-11-08T22:00:00Z',
            'end': '2023-11-08T23:59:59Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 46.48,
          'event-code': null
        },
        {
          'ch-item-def': {
            'description': 'Attendant care services; per 15 minutes',
            'revcode': '0001',
            'meta': {
              'profile': [
                'urn:fhir:billing:profile:ChargeItemDefinition'
              ],
              'organization': {
                'id': '96010',
                'resourceType': 'Organization'
              },
              'lastUpdated': '2025-02-07T10:43:18.795493Z',
              'createdAt': '2025-02-07T10:43:18.795493Z',
              'versionId': '1604'
            },
            'single-program': 'EPD',
            'effectiveDate': '2023-09-01',
            'resourceType': 'ChargeItemDefinition',
            'payor': {
              'type': 'Organization',
              'identifier': {
                'value': 'DHCFP',
                'system': 'urn:system:evv:PAYOR_ID'
              }
            },
            'status': 'active',
            'id': '1693d8cf-a5e2-4b35-9ff7-756c76ae57a0',
            'code': {
              'coding': [
                {
                  'code': 'T1019'
                }
              ]
            },
            'identifier': [
              {
                'value': 'T1019_02',
                'system': 'urn:system:evv:SERVICEKEY'
              }
            ],
            'placeOfService': '99',
            'unitPrice': {
              'value': 5.81,
              'currency': 'USD'
            }
          },
          'revcode': '0001',
          'billable-hours': 180,
          'service-code': 'T1019',
          'type': 'base-service',
          'unit-price': 5.81,
          'ch-item-type': 'default',
          'total': 5.81,
          'raw-units': 180,
          'unit-rule': {
            'id': '1',
            'payor': 'DHCFP',
            'rule': {
              'each-next': {
                'time': '0:15:00'
              },
              'thresholds': [
                {
                  'time': '00:07:00'
                }
              ]
            },
            'ruleid': '1',
            'service': 'T1019',
            'split-shift': 'true'
          },
          'units': 1,
          'period': {
            'start': '2023-11-09T00:00:00Z',
            'end': '2023-11-09T00:03:00Z'
          },
          'evv-id': 'T1019_02',
          'program': 'EPD',
          'price': 5.81,
          'event-code': null
        }
      ],
      'billing_provider_sender_id': '12345',
      'service_code': 'T1019',
      'auth_ref_number': '123456',
      'visit_edate': '2023-11-09T21:00:00Z',
      'client_id_custom2': '1234556778',
      'units': 9,
      'exceptions': [],
      'billing_provider_npi': '98766543',
      'service_start_date': '2023-11-08T22:00:00Z',
      'service_end_date': '2023-11-09T00:03:00Z',
      'client_diagnosis': 'L30.1',
      'program': 'EPD',
      'worker_l_name': 'Krabs',
      'tenant-id': '96010',
      'billing_provider_name': 'Saguaro',
      'payor_id': 'DHCFP',
      'service-line-id': 1,
      'bill_hours': 7140,
      'client_state': 'NY',
      'schedule_start_date': '2023-11-10T00:30:00Z',
      'billing_provider_tax_id': '00001'
    }
  ],
  'payors': [
    'DHCFP'
  ],
  'statuses': [
    'Billable'
  ],
  'pagination': {
    'page': 0,
    'per-page': 20,
    'total-units': 0,
    'total-count': 10,
    'total-pages': 1
  }
}