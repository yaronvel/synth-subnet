module.exports = {
  apps: [
    {
      name: 'miner',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner --wallet.hotkey default --axon.port 8091 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner2',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner2 --wallet.hotkey default --axon.port 8092 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner3',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner3 --wallet.hotkey default --axon.port 8093 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner4',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner4 --wallet.hotkey default --axon.port 8094 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner5',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner5 --wallet.hotkey default --axon.port 8095 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner6',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner6 --wallet.hotkey default --axon.port 8096 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner7',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner7 --wallet.hotkey default --axon.port 8097 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner8',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner8 --wallet.hotkey default --axon.port 8098 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner9',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner9 --wallet.hotkey default --axon.port 8099 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner10',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner10 --wallet.hotkey default --axon.port 8100 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner11',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner11 --wallet.hotkey default --axon.port 8101 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner12',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner12 --wallet.hotkey default --axon.port 8102 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner13',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner13 --wallet.hotkey default --axon.port 8103 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner14',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner14 --wallet.hotkey default --axon.port 8104 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner15',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner15 --wallet.hotkey default --axon.port 8105 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner16',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner16 --wallet.hotkey default --axon.port 8106 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner17',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner17 --wallet.hotkey default --axon.port 8107 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner18',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner18 --wallet.hotkey default --axon.port 8108 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner19',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner19 --wallet.hotkey default --axon.port 8109 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner20',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner20 --wallet.hotkey default --axon.port 8110 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner21',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner21 --wallet.hotkey default --axon.port 8111 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
    {
      name: 'miner22',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner22 --wallet.hotkey default --axon.port 8112 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
{
      name: 'miner23',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner23 --wallet.hotkey default --axon.port 8113 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
{
      name: 'miner24',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner24 --wallet.hotkey default --axon.port 8114 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },
{
      name: 'miner25',
      interpreter: 'python3',
      script: './neurons/miner.py',
      args: '--netuid 50 --logging.debug --logging.trace --wallet.name miner25 --wallet.hotkey default --axon.port 8115 --blacklist.force_validator_permit true --blacklist.validator_min_stake 1 ----blacklist.validator_exceptions 0 1 8 17 34 49 53 114 131',
      env: {
        PYTHONPATH: '.'
      },
    },



  ],
};
