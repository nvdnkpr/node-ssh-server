exports.magic = {
    disconnect : 1,
    ignore : 2,
    unimplemented : 3,
    debug : 4,
    service_request : 5,
    service_accept : 6,
    kexinit : 20,
    kexdh_init : 30,
    kexdh_reply : 31,
};

exports.algorithms = [
    {
        key : 'kex_algorithms',
        names : [ 'diffie-hellman-group1-sha1' ],
    },
    {
        key : 'server_host_key_algorithms',
        names : [ 'ssh-dss' ],
    },
    {
        key : 'encryption_algorithms_client_to_server',
        names : [ 'aes-128-cbc' ],
    },
    {
        key : 'encryption_algorithms_server_to_client',
        names : [],
    },
    {
        key : 'mac_algorithms_client_to_server',
        names : [ 'md5' ],
    },
    {
        key : 'mac_algorithms_server_to_client',
        names : [],
    },
    {
        key : 'compression_algorithms_client_to_server',
        names : [],
    },
    {
        key : 'compression_algorithms_server_to_client',
        names : [],
    },
    {
        key : 'languages_client_to_server',
        names : [],
    },
    {
        key : 'languages_server_to_client',
        names : [],
    },
];
