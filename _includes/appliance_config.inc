<p>
  On the first boot the system adapts to the hardware and defaults to automatic IP and DNS configuration via DHCP.
  The OBS scans for a LVM volume group called "OBS" and will use that to set up logical volumes for the worker file systems.
  Additionally if this volume group contains a logical volume named "server" it will be used as the data partition for the server.
  Please note that
  <span data-content="Files, master boot record, partitions and every other bit will be gone for good.
  Be careful!" data-variation="inverted wide" class="popup bold">all data</span>
  on the harddisk you deploy the image to will get overwritten.
</p>
<p>
  All appliances come pre-configured with the right set of repositories and can updated via the system tools YaST or zypper at any time.
  Another way is to replace the entire image. If you update the image keep in mind that you need to have have your data directory on a
  separate storage, otherwise it will get deleted.
</p>
