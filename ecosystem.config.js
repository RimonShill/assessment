
 module.exports = {
  apps: [
    {
      name: 'next', // Don't use uppercase
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'npm',
      args: 'start'
    }
  ]
}
