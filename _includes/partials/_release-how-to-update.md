## How to Update

If you already have a running OBS installation and want to update it,
please read the
[README.UPDATERS](https://github.com/openSUSE/open-build-service/blob/{{ include.version }}/dist/README.UPDATERS)
file about the necessary steps.
<span style="color: red;">Please note</span>
that you need to have at least OBS 2.5 (OBS 2.6+ is recommended) to be able to update to OBS {{ include.version }}.
Migrations from older OBS versions will fail.

OBS Appliance users who have [setup their LVM](http://openbuildservice.org/download/#appliance_config)
can just replace their appliance image without data loss.
The migration will happen automatically.
